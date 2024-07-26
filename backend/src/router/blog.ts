import express, { Request, Response } from "express"
import { createBlogSchema } from "../utils/schema"
import { middlware } from "./middleware"
import { db } from "../utils/db"

export const router = express()

router.post("/create", middlware, async (req: Request, res: Response) => {
    try {
        const { title, content } = req.body
        const userId = req.userId

        const validate = createBlogSchema.safeParse(title, content)
        if (!validate.success) {
            return res.status(403).json({
                error: "Invalid Inputs"
            })
        }

        const blog = await db.blog.create({
            data: {
                title: title,
                content: content,
                authorId: userId
            }
        })

        return res.status(200).json({
            blog: blog
        })

    } catch (error) {
        return res.status(401).json({
            error: error
        })
    }
})
