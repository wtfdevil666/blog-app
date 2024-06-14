import { db } from "@/lib/db";

const Blog = async ({ id }: { id: string }) => {
    const blog = await db.blog.findUnique({
        where: {
            id: id,
        },
    });
    return (
        <div className="flex items-center justify-center">
            <div className=" w-[800px] mt-16 space-y-16 p-8">
                <div className="text-5xl capitalize">{blog.title}</div>
                <div className="text-md capitalize">{blog.description}</div>
                <div className="text-lg">
                    <p>{blog.content}</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
