// Added basic authentication middleware to protect site from public access
import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Skip auth for API routes and static assets
  if (
    request.nextUrl.pathname.startsWith('/api/') ||
    request.nextUrl.pathname.startsWith('/_next/') ||
    request.nextUrl.pathname.startsWith('/favicon.ico')
  ) {
    return NextResponse.next()
  }

  const basicAuth = request.headers.get('authorization')
  const url = request.nextUrl.clone()

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

    // Change these credentials as needed
    if (user === 'admin' && pwd === 'password123') {
      return NextResponse.next()
    }
  }

  url.pathname = '/api/auth'
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/((?!api/auth|_next/static|_next/image|favicon.ico).*)'],
} 