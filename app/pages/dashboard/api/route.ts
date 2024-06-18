import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const requestHeader = new Headers(req.headers)
    console.log(requestHeader.get('Authorization'));
    const theme = req.cookies.get('theme')
    cookies().set('resultperPage', '20')
    return new Response('Hello world ! - ' + theme?.value, {
        headers: {
            'Set-Cookie': 'theme=dark'
        }
    })
}