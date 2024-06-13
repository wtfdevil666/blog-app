import * as z from "zod"

export const SignInSchema = z.object({
    email: z.string().email({
        message: "Email Required"
    }),
    password: z.string().min(6, {
        message: "Min 6 characters required"
    }),
})

export const SignUpSchema = z.object({
    name: z.string().min(1, { message: "Name required" }),
    email: z.string().email({
        message: "Email Required"
    }),
    password: z.string().min(6, {
        message: "Min 6 characters required"
    }),
})