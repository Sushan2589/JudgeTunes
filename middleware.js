import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();
console.log("THIS IS WORKING THIS WORKS THIS IS WORKIG THIS WORKS")

export const config = {
  
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)", // All routes except static files
    "/api/:path*", // API routes
  ],
};



