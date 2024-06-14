import { db } from "@/lib/db";
import User from "./userdetailblog";

const Blog = async ({ id }: { id: string }) => {
    const blog = await db.blog.findUnique({
        where: {
            id: id,
        },
    });
    const user = await db.user.findUnique({
        where: {
            email: blog.userEmail,
        },
    });

    return (
        <div className="flex items-center justify-center">
            <div className=" w-[800px] mt-16 space-y-16 p-8">
                <div className="flex flex-row justify-between items-center ">
                    <div className="text-5xl capitalize">{blog.title}</div>
                    <div className="space-y-4 flex flex-col justify-center items-center">
                        <User fallBack={user.name.slice(0, 1).toUpperCase()} />
                        <div className="capitalize">{user.name}</div>
                    </div>
                </div>
                <div className="text-md capitalize">{blog.description}</div>
                <div className="text-lg">
                    <p>{blog.content}</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
