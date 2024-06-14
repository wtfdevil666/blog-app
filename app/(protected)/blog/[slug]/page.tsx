import { AppBar } from "@/components/appbar";
import Blog from "@/components/blog/blog";

const BlogPage = ({ params }: { params: { slug: string } }) => {
    return (
        <div>
            <AppBar />
            <Blog id={params.slug}/>
        </div>
    );
};

export default BlogPage;
