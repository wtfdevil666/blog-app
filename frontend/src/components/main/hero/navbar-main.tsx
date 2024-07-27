import { Plus } from "lucide-react";

export const NavBar = () => {
    return (
        <div className="flex gap-x-8 justify-center items-center ">
            <div className="border-zinc-300 flex md:gap-x-5 border-b-[0.2px] pr-12">
                <div>
                    <Plus strokeWidth={1} width={20} height={20}/>
                </div>
                <div className="pb-4 text-[14px] lg:text-[15px] font-['Figtree'] font-medium text-zinc-600 hover:text-black cursor-pointer">
                    For you
                </div>
                <div className="pb-4 text-[14px] lg:text-[15px] font-['Figtree'] font-medium text-zinc-600 hover:text-black cursor-pointer">
                    Following
                </div>
                <div className="text-zinc-600 pb-4 text-[14px] lg:text-[15px] font-['Figtree'] font-medium hover:text-black cursor-pointer">
                    Coding
                </div>
                <div className="text-zinc-600 pb-4 text-[14px] lg:text-[15px] font-['Figtree'] font-medium hover:text-black cursor-pointer">
                    React
                </div>
                <div className="pb-4 text-zinc-600 text-[14px] lg:text-[15px] font-['Figtree'] font-medium hover:text-black cursor-pointer">
                    Software Engineering
                </div>
                <div className="pb-4 lg:text-[15px] text-[14px] text-zinc-600 font-['Figtree'] font-medium hover:text-black cursor-pointer">
                    Programming
                </div>
            </div>
        </div>
    );
};
