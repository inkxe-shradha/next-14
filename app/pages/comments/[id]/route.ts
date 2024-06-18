import { redirect } from "next/navigation";
import { comments } from "../data";

export async function GET(_request: Request, context: any) {
    const { params } = context;
    const singleComment = comments.find(ele => ele.id === Number(params.id))
    if (!singleComment) return new Response('Page not found', {
        status: 404,
        statusText: 'Page not found.'
    })
    // * OR
    // redirect('/pages/comments')
    return Response.json(singleComment)
}

export async function PATCH(request: Request, context: any) {
    const { params } = context;
    const singleComment = comments.find(ele => ele.id === Number(params.id))
    if (!singleComment) return new Response('Page not found', {
        status: 404,
        statusText: 'Page not found.'
    })
    const body = await request.json()
    comments.forEach(ele => {
        if (ele.id === parseInt(params.id)) {
            ele.text = body.text
        }
    })
    return new Response(JSON.stringify(comments), {
        status: 200,
    })
}