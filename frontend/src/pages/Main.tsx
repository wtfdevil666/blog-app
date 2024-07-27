import { Hero } from "@/components/main/hero";
import { NavBar } from "@/components/main/navbar";

export const Main = () => {
    return (
        <div className="bg-white w-screen h-screen overflow-auto">
            <NavBar />
            <Hero />
        </div>
    );
};
