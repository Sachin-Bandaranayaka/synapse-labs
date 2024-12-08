import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Get the pathname of the request (e.g. /, /admin)
  const path = request.nextUrl.pathname

  // If it's the admin login page, allow access
  if (path === '/admin/login') {
    return NextResponse.next()
  }

  // For all other admin routes, check the session cookie
  if (path.startsWith('/admin')) {
    const authCookie = request.cookies.get('user')
    
    if (!authCookie?.value) {
      // Redirect to login if not authenticated
      const loginUrl = new URL('/admin/login', request.url)
      return NextResponse.redirect(loginUrl)
    }

    try {
      const userData = JSON.parse(authCookie.value)
      if (userData.role !== 'admin') {
        // Redirect to login if not admin
        const loginUrl = new URL('/admin/login', request.url)
        return NextResponse.redirect(loginUrl)
      }
    } catch (error) {
      // If cookie is invalid, redirect to login
      const loginUrl = new URL('/admin/login', request.url)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/admin/:path*'
}
