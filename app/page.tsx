import { AppBar } from "@/components/appbar";
import DailogWrapper from "@/components/auth/dialogwrapper";
import LoginForm from "@/components/auth/loginform";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Lora } from "next/font/google";
import Link from "next/link";

const font = Lora({
    subsets: ["latin"],
    weight: ["600"],
});
export default function Home() {
    return (
        <div>
            <AppBar />
            <div
                className={cn(
                    "text-8xl flex flex-col h-[60vh] pt-8 pr-[75vh] justify-center items-center",
                    font.className
                )}
            >
                Stay Curious
                <div className="text-2xl pt-8 pl-8">
                    Discover stories, thinking, and expertise from writers
                    <div className="text-xl">on any topic.</div>
                </div>
            </div>
            <div className="pl-36">
                <Button
                    size={"lg"}
                    className="rounded-full text-xl w-[28vh] h-[5.5vh]"
                >
                    <DailogWrapper title="Sign In" buttonTitle="Start Reading">
                        <LoginForm />
                    </DailogWrapper>
                </Button>
            </div>
        </div>
    );
}
