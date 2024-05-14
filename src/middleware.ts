import { cookies } from "next/headers";
import callEvaService from "./utils/call-eva-service";
import validateToken from "./utils/validate-token";

export async function middleware() {
  const authToken = cookies().get("EVA-Auth-Token");
  if (authToken) {
    const tokenValidity = await validateToken();
    console.log(tokenValidity);
  }
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
