// API route that handles basic authentication challenge
import { NextResponse } from 'next/server'

export function GET() {
  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Protected Site"',
    },
  })
} 