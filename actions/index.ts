"use server"
import { BlogSchema, SignInSchema, SignUpSchema } from '@/schema'
import * as z from 'zod'
import bcryptjs from "bcryptjs"
import { db } from '@/lib/db'
import { auth, signIn } from '@/auth'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { AuthError } from 'next-auth'
import { redirect } from 'next/navigation'

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

    const hashedPass = await bcryptjs.hash(validatedField.data?.password || "", 10)

    const existingUser = await db.user.findUnique({ where: { email: validatedField.data?.email } })
    if (existingUser) {
        return { error: "Email already taken" }
    }

    const { email, password } = validatedField.data

    await db.user.create({
        data: {
            name: validatedField.data?.name,
            email: validatedField.data?.email,
            password: hashedPass
        }
    })

    await signIn("credentials", {
        email, password, redirectTo: DEFAULT_LOGIN_REDIRECT
    })
    return { success: "Signed Up" }

}

export const publish = async (values: z.infer<typeof BlogSchema>) => {
    const session = await auth()
    const validatedField = BlogSchema.safeParse(values)
    if (!validatedField) {
        return { error: "Wrong Inputs" }
    }

    const { title, description, content } = validatedField.data


    const blog = await db.blog.create({
        data: {
            title: title,
            description: description,
            content: content,
            userEmail: session.user.email
        }
    })
    return blog

}

export const getAllBlogs = async () => {
    const blogs = await db.blog.findMany()

    return blogs
}

export const getBlogById = async (id: string) => {
    const blog = await db.blog.findUnique({
        where: {
            id: id
        }
    })
    return blog
}