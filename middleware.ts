import { type NextRequest, NextResponse } from 'next/server';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req: request, res });

  // Use a try-catch block to handle potential errors
  try {
    // Refreshes the session and returns the session object
    const {
      data: { session },
    } = await supabase.auth.getSession();

    // Optional: Check if the user is authenticated
    if (!session) {
      // Optionally redirect to login page
      // return NextResponse.redirect(new URL('/login', request.url));
    }
  } catch (e) {
    console.error('Error in middleware:', e);
  }

  return res;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
};
