import { NavBar } from "../components/home/navbar";
import { Hero } from "@/components/home/hero";

const Root = () => {
    return (
        <div className=" absolute bg-[#F7F4ED] w-screen h-screen overflow-auto scroll-smooth">
            <NavBar />
            <Hero />
        </div>
    );
};

export default Root;
