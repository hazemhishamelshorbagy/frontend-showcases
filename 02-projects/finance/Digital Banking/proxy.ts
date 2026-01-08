import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server';

export async function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Static test data for now
    let userRole = 'user'; // Try changing 'user' or 'guest' to test behavior


    if (userRole !== 'user') {

        return NextResponse.redirect(new URL('/', request.url));
    }

    // Otherwise, allow the request
    return NextResponse.next();
}

// Matcher controls which paths middleware runs on
export const config = {
    matcher: ['/dashboard', '/protected/:path*']
}
