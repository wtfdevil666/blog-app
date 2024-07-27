import { Button } from "@/components/ui/button";

export const Recommended = () => {
    return (
        <div className="font-['Figtree'] flex flex-col gap-y-8">
            <h1 className="font-semibold">Recommended Topic</h1>
            <div className="grid grid-cols-3 flex-row gap-4">
                <Button className="bg-[#F2F2F2] text-black rounded-full">
                    Apple
                </Button>
                <Button className="bg-[#F2F2F2] text-black rounded-full">
                    Flutter
                </Button>
                <Button className="bg-[#F2F2F2] text-black rounded-full">
                    Mindfullness
                </Button>
                <Button className="bg-[#F2F2F2] text-black rounded-full">
                    Women
                </Button>
                <Button className="bg-[#F2F2F2] text-black rounded-full">
                    AWS
                </Button>
                <Button className="bg-[#F2F2F2] text-black rounded-full">
                    Sexuality
                </Button>
                <Button className="bg-[#F2F2F2] text-black rounded-full">
                    Fitness
                </Button>
            </div>
            <div className="text-sm text-green-700 font-semibold cursor-pointer">
                See more Topics
            </div>
        </div>
    );
};
