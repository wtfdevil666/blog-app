import Credentials from "next-auth/providers/credentials"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import type { NextAuthConfig } from "next-auth"
import { SignInSchema } from "./schema"
import { db } from "./lib/db"
import bcryptjs from 'bcryptjs'

export default {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        GitHub({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        Credentials({
            async authorize(credentials) {
                const validatedFields = SignInSchema.safeParse(credentials)

                if (validatedFields.success) {
                    const { email, password } = validatedFields.data
                    const user = await db.user.findUnique({ where: { email: email } })
                    if (!user || !user.password) {
                        return null
                    }
                    const match = await bcryptjs.compare(password, user.password)

                    if (match) return user
                }
                return null
            },
        })
    ]

} satisfies NextAuthConfig