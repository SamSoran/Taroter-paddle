import { type NextRequest, NextResponse } from 'next/server';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req: request, res });

  // Use getUser() instead of getSession()
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // You can perform additional checks here if needed
  // For example, you might want to redirect unauthenticated users
  if (!user) {
    // Optionally redirect to login page
    // return NextResponse.redirect(new URL('/login', request.url));
  }

  return res;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
};
