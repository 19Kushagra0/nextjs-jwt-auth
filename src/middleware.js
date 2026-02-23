import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  console.log("middleware is working...");

  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const pathname = request.nextUrl.pathname;

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);

    console.log("Verified Payload:", payload);

    console.log("Role:", payload.role);
    console.log("Path:", pathname);

    if (pathname.startsWith("/dashboard") && payload.role !== "manager") {
      console.log("Access denied to dashboard for role:", payload.role);
      return NextResponse.redirect(new URL("/", request.url));
    }

    if (pathname.startsWith("/shop") && payload.role !== "shopkeeper") {
      console.log("Access denied to shop for role:", payload.role);
      return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    console.log("Token verification failed:", error.message);
    return NextResponse.redirect(new URL("/", request.url));
  }
}

// dont forget to export the config else it will work weirdlyW
export const config = {
  matcher: ["/dashboard/:path*", "/shop/:path*"],
};
