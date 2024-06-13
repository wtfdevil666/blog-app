import NextAuth from "next-auth";
import authConfig from "./auth.config"
import { apiAuthPrefix, authRoute, DEFAULT_LOGIN_REDIRECT, publicRoute } from "./routes";


const { auth } = NextAuth(authConfig)

export default auth((req) => {
    const { nextUrl } = req
    const isLogged = !!req.auth

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoute.includes(nextUrl.pathname);
    const isAuthRoute = authRoute.includes(nextUrl.pathname);

    if (isApiAuthRoute) {
        return null
    }

    if (isAuthRoute) {
        if (isLogged) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
        }
        return null
    }

    if (!isLogged && !isPublicRoute) {
        return Response.redirect(new URL("/auth/signup", nextUrl))
    }

    return null;
})

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};