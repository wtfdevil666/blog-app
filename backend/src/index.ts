import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { router as userRouter } from "./router/user"
import { router as blogRouter } from "./router/blog"
dotenv.config()

const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use(cors())
app.use("/user", userRouter)
app.use("blog", blogRouter)

app.listen(PORT, () => {
    console.log(`Server is running on: ${PORT}`);
})