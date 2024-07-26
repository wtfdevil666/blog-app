import z from "zod"

export const loginSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(1, {
        message: "Password is requried"
    })
})

export const registerSchema = z.object({
    name: z.string().min(1, {
        message: "Name is requried"
    }),
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(1, {
        message: "Password is requried"
    })
})

export const createBlogSchema = z.object({
    title: z.string().min(1, {
        message: "Title is required"
    }),
    content: z.string().min(1, {
        message: "Content is required"
    })
})