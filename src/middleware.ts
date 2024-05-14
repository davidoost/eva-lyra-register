import { NextResponse, NextRequest } from "next/server";
import validateToken from "./utils/middleware/validate-token";

export default async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  // Check if we have an authToken cookie
  const authToken = request.cookies.get("EVA-Auth-Token");
  // if we do, check if it's valid
  if (authToken) {
    const isTokenValid = await validateToken(authToken.value);
    // if it's not valid, delete the cookie and optionally redirect
    if (!isTokenValid) {
      response.cookies.delete("EVA-Auth-Token");
      console.log("auth token deleted");
      if (request.nextUrl.pathname != "/") {
        return NextResponse.redirect(new URL("/", request.url));
      }
      // if it is valid, and we landed on the home page, redirect to the success page immediately
    } else if (request.nextUrl.pathname == "/") {
      return NextResponse.redirect(new URL("/success", request.url));
    }
  }
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
