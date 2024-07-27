import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export const WhoToFollow = () => {
    return (
        <div className="flex flex-row gap-x-4 items-center justify-between  ">
            <div className="flex flex-row space-x-6 items-center">
                <div>
                    <Avatar className="w-[32px] h-[32px]">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="bg-blue-400">
                            C
                        </AvatarFallback>
                    </Avatar>
                </div>
                <div className="space-y-1">
                    <h1 className="font-bold">Aryan Singh</h1>
                    <p className="text-xs text-zinc-600">
                        Cyber Guy | Top Writer | Engineer
                    </p>
                </div>
            </div>
            <div>
                <Button className="bg-white text-black border-[1px] border-black rounded-full h-8 px-3 py-2">
                    Follow
                </Button>
            </div>
        </div>
    );
};
