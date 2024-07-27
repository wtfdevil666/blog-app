import { BlogCard } from "./hero/blog-card";
import { NavBar } from "./hero/navbar-main";
import { SideBar } from "./hero/sidebar";

export const Hero = () => {
    return (
        <div className="h-full flex px-16 pt-8">
            <div className="h-full lg:w-[65%] w-full">
                <div className="pt-6">
                    <NavBar />
                </div>
                <div className="pt-6 flex flex-col justify-center items-center">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>
            </div>
            <div className="h-full w-[35%] hidden lg:flex">
                <SideBar />
            </div>
        </div>
    );
};
