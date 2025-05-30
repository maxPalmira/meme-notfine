// Fixed basic authentication middleware with proper error handling and loop prevention
import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Skip auth for localhost development
  if (request.nextUrl.hostname === 'localhost' || request.nextUrl.hostname === '127.0.0.1') {
    return NextResponse.next()
  }

  // Skip auth for API routes, static assets, and auth endpoint
  if (
    request.nextUrl.pathname.startsWith('/api/') ||
    request.nextUrl.pathname.startsWith('/_next/') ||
    request.nextUrl.pathname.startsWith('/favicon.ico')
  ) {
    return NextResponse.next()
  }

  const basicAuth = request.headers.get('authorization')

  if (basicAuth) {
    try {
      const authValue = basicAuth.split(' ')[1]
      if (!authValue) {
        return createAuthResponse()
      }
      
      const [user, pwd] = atob(authValue).split(':')

      // Strong randomized credentials
      if (user === 'memeLord' && pwd === 'K9x#mQ7$nZ2@wP5v') {
        return NextResponse.next()
      }
    } catch (error) {
      return createAuthResponse()
    }
  }

  return createAuthResponse()
}

function createAuthResponse() {
  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Protected Meme Site"',
    },
  })
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
} 