import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Bookmark,
    CircleMinus,
    Ellipsis,
    Heart,
    MessageCircle,
} from "lucide-react";

export const BlogCard = () => {
    return (
        <div className="flex flex-col sm:w-[680px] sm:h-[255px] p-4 gap-y-4 border-b">
            <div className="flex space-x-2 font-['Figtree']">
                <div>
                    <Avatar className="w-[20px] h-[20px]">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="bg-blue-400">
                            C
                        </AvatarFallback>
                    </Avatar>
                </div>
                <div className="text-[13px]">Aryan Singh</div>
            </div>
            <div className="flex flex-row gap-x-4 justify-between">
                <div>
                    <h2 className="font-extrabold font-['Figtree'] text-2xl leading-[1.3em] select-none">
                        A Founder Who Just Raised A $3 Million Seed Round Showed
                        Me The New Way Startups Are Pitching VCs
                    </h2>
                    <p className="pt-2 font-['Figtree'] font-[16px] text-zinc-600 select-none">
                        The ideal structure for fundraising pitches is
                        constantly changing, and the newest iteration has
                        clearly arrived.
                    </p>
                </div>
                <div>
                    <img
                        className="lg:ml-4"
                        width={"362px"}
                        height={"306px"}
                        src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*6_u3Gd8PtAfQf6Jl"
                        alt=""
                    />
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-row space-x-6">
                    <div className="text-zinc-600 text-sm font-['Figtree'] cursor-pointer select-none">
                        May 30
                    </div>
                    <div>
                        <Heart
                            strokeWidth={1}
                            className="text-zinc-600 hover:text-black cursor-pointer select-none"
                        />
                    </div>
                    <div>
                        <MessageCircle
                            strokeWidth={1}
                            className="text-zinc-600 hover:text-black cursor-pointer select-none"
                        />
                    </div>
                </div>
                <div className="flex flex-row space-x-6">
                    <div>
                        <CircleMinus
                            strokeWidth={1}
                            className="text-zinc-600 hover:text-black cursor-pointer select-none"
                        />
                    </div>
                    <div>
                        <Bookmark
                            strokeWidth={1}
                            className="text-zinc-600 hover:text-black cursor-pointer select-none"
                        />
                    </div>
                    <div>
                        <Ellipsis
                            strokeWidth={1}
                            className="text-zinc-600 hover:text-black cursor-pointer select-none"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
