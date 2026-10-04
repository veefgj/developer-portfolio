// `/` has no page of its own: send visitors to the language they picked last time (cookie set by
// LanguageToggle), Vietnamese by default. Both language pages stay fully static.
import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const lang = request.cookies.get("lang")?.value === "en" ? "en" : "vi";
  return NextResponse.redirect(new URL(`/${lang}`, request.url));
}

export const config = {
  matcher: "/",
};
