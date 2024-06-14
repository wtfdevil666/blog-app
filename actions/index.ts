"use server"
import { SignInSchema, SignUpSchema } from '@/schema'
import * as z from 'zod'
import bcryptjs from "bcryptjs"
import { db } from '@/lib/db'
import { signIn } from '@/auth'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { AuthError } from 'next-auth'

export const login = async (values: z.infer<typeof SignInSchema>) => {
    const validatedField = SignInSchema.safeParse(values)
    if (!validatedField) {
        return { error: "Invalid fields!" }
    }
    const { email, password } = validatedField.data
    try {
        await signIn("credentials", {
            email, password, redirectTo: DEFAULT_LOGIN_REDIRECT
        })
    } catch (error) {
        if (error instanceof AuthError) {
            console.log("error:", error.type)
            switch (error.type) {
                case "CallbackRouteError":
                    return { error: "Invalid Credentials" }
                default:
                    return { error: "Something went wrong" }
            }
        }
        throw error
    }
    return { success: "Signed In" }
}

export const register = async (values: z.infer<typeof SignUpSchema>) => {
    const validatedField = SignUpSchema.safeParse(values)
    if (!validatedField) {
        return { error: "Invalid fields!" }
    }

    const data = validatedField.data

    const hashedPass = await bcryptjs.hash(data?.password || "", 10)

    const existingUser = await db.user.findUnique({ where: { email: data?.email } })
    if (existingUser) {
        return { error: "Email already taken" }
    }

    const { email, password } = data

    await db.user.create({
        data: {
            name: data?.name,
            email: data?.email,
            password: hashedPass
        }
    })

    await signIn("credentials", {
        email, password, redirectTo: DEFAULT_LOGIN_REDIRECT
    })
    return { success: "Signed Up" }

}

