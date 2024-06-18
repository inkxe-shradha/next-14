/**
 * * Middleware are two types in next js
 * * -> Custom match config.
 * * -> Conditional statements.
 */

import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


// * Matcher config basic example.

export function middleware(req: NextRequest) {
    // * If we are not using the matcher config option then we need to use this Next request getter match options

    // if (req.nextUrl.pathname === '/pages/dashboard/') return NextResponse.redirect(new URL('/hello', req.url))

    // * Handle and modified the Global request and response objects.
    const response = NextResponse.next()
    const themePreference = cookies().get('theme')
    if (!themePreference) {
        response.cookies.set('theme', 'dark')
    }

    // * Custom Headers
    response.headers.set('Content-Type', 'application/JSON')
    // Return the redirect or rewrite response.
    // return NextResponse.redirect(new URL('/', req.url))
    return response;
}

export const config = {
    matcher: "/pages/dashboard"
}