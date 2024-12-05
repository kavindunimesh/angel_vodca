import { NextRequest, NextResponse } from 'next/server';

import { SeoData } from '@/types/services/IFetchData';

import { FetchSeoData } from '@/lib/services/FetchingData';

// Constants for header names
const HEADER_CSP = 'Content-Security-Policy';
const HEADER_SEO_TITLE = 'x-seo-title';
const HEADER_SEO_DESCRIPTION = 'x-seo-description';

// Generate CSP header value
function generateCspHeader(): string {
  const cspDirectives = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' blob: data:",
    "font-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests"
  ];

  return cspDirectives.join('; ');
}

// Set security headers
function setSecurityHeaders(response: NextResponse): void {
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'no-referrer');
  response.headers.set(
    'Permissions-Policy',
    'geolocation=(), microphone=(), camera=()'
  );

  if (process.env.NODE_ENV === 'production') {
    response.headers.set(
      'Strict-Transport-Security',
      'max-age=63072000; includeSubDomains; preload'
    );
  }
}

export async function middleware(request: NextRequest) {
  const cspHeaderValue = generateCspHeader();

  // Fetch SEO data
  const seoData: SeoData = await FetchSeoData(request.nextUrl.pathname);
  // console.log('Fetched SEO data:', seoData);

  // Set up request headers
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(HEADER_CSP, cspHeaderValue);
  requestHeaders.set(HEADER_SEO_TITLE, seoData?.title || '');
  requestHeaders.set(HEADER_SEO_DESCRIPTION, seoData?.description || '');

  // Create the response
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Set CSP header in the response
  response.headers.set(HEADER_CSP, cspHeaderValue);
  response.headers.set(HEADER_SEO_TITLE, seoData?.title || '');
  response.headers.set(HEADER_SEO_DESCRIPTION, seoData?.description || '');

  // Set additional security headers
  setSecurityHeaders(response);

  return response;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:jpg|jpeg|png|gif|svg|webp)).*)',
  ],
};