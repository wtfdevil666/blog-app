import { NavBar } from "../components/home/navbar";
import { Hero } from "@/components/home/hero";

const Root = () => {
    return (
        <div className="bg-[#F7F4ED] w-screen h-screen overflow-auto">
            <NavBar />
            <Hero />
        </div>
    );
};

export default Root;
