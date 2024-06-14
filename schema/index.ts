import { title } from "process"
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

export const BlogSchema = z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    content: z.string().min(1),
})