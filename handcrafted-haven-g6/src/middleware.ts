export { default } from "next-auth/middleware";

export const config = { matcher: ["/dashboard:path*","/profile/:path*","/products/:id/review/:path*"] }