import { Hero } from "@/components/home/hero";
import { NavBar } from "@/components/home/navbar";

export const Home = () => {
    return (
        <div className=" absolute bg-[#F7F4ED] w-screen h-screen overflow-auto scroll-smooth">
            <NavBar />
            <Hero />
        </div>
    );
};
