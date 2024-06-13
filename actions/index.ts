"use server"
import { SignInSchema, SignUpSchema } from '@/schema'
import * as z from 'zod'

export const login = async (values: z.infer<typeof SignInSchema>) => {
    const validatedField = SignInSchema.safeParse(values)
    if (!validatedField) {
        return { error: "Invalid fields!" }
    }

    console.log(values)
    return { success: "Signed In" }
}

export const register = async (values: z.infer<typeof SignUpSchema>) => {
    const validatedField = SignUpSchema.safeParse(values)
    if (!validatedField) {
        return { error: "Invalid fields!" }
    }

    console.log(values)
    return { success: "Signed In" }

}

