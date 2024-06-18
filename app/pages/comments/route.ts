import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams
    const query = searchParams.get('query')
    const filteredComments = query ? comments.filter(comment => comment.text.includes(query)) : comments
    return Response.json(filteredComments)
}

export async function POST(request: Request) {
    const comment = await request.json();
    console.log('Loaded comments', comment);
    const newComment = {
        id: comments.length + 1,
        text: comment
    }
    comments.push(newComment);
    return new Response(JSON.stringify(comments), {
        headers: {
            'Content-Type': 'application/json'
        },
        status: 201
    })
}