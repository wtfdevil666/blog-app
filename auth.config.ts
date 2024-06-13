import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import { SignInSchema } from "./schema"
import { db } from "./lib/db"
import bcryptjs from 'bcryptjs'

export default {
    providers: [
        Credentials({
            async authorize(credentials, request) {
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