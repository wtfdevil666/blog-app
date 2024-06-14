import { getAllBlogs } from "@/actions";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import UserDetail from "./userdetail";

const BlogRenderer = async () => {
    const blogs = await getAllBlogs();
    return (
        <div className="flex flex-col items-center justify-center pt-16 pb-16 space-y-6">
            {blogs.map((blog) => (
                <Link key={blog.id} href={`/blog/${blog.id}`}>
                    <Card className="w-[800px] flex flex-row">
                        <div>
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
                        </div>
                        <div className="p-4">
                            <UserDetail id={blog.id} />
                        </div>
                    </Card>
                </Link>
            ))}
        </div>
    );
};

export default BlogRenderer;
