import { getAllBlogs } from "@/actions";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const BlogRenderer = async () => {
    const blogs = await getAllBlogs();
    return (
        <div className="flex flex-col items-center justify-center pt-16 pb-16 space-y-10">
            {blogs.map((blog) => (
                <Link key={blog.id} href={`/blog/${blog.id}`}>
                    <Card className="w-[800px] space-y-8">
                        <CardHeader className="space-y-8">
                            <CardTitle className="text-xl">
                                {blog.title.toUpperCase()}
                            </CardTitle>
                            <CardDescription className="capitalize">
                                {blog.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>{blog.content.substring(0, 200)}</p>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </div>
    );
};

export default BlogRenderer;
