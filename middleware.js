import { NextResponse } from "next/server";

/**
 * ────────────────────────────────────────────────────────────
 *  MAINTENANCE MODE
 *  While ON, every route redirects to the /maintenance page.
 *
 *  To bring the FULL SITE back online, either:
 *    • set MAINTENANCE_MODE to false below, or
 *    • set the env var  MAINTENANCE_MODE=false
 * ────────────────────────────────────────────────────────────
 */
const MAINTENANCE_MODE = process.env.MAINTENANCE_MODE !== "false";

export function middleware(request) {
  if (!MAINTENANCE_MODE) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = "/maintenance";
  return NextResponse.redirect(url);
}

// The matcher already excludes the maintenance page, Next.js internals, and
// static assets (so the logo and styles still load on the maintenance page).
export const config = {
  matcher: [
    "/((?!maintenance|_next/static|_next/image|images|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
