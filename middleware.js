import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();
console.log("Confirmation that middleware works")

export const config = {
  
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)", // All routes except static files
    "/api/:path*", // API routes
  ],
};



