import Link from "next/link";
import { Button } from "./ui/button";

export const AppBar = () => {
    return (
        <div className="w-full border-b-[1px] border-black h-[76px] flex flex-row items-center justify-between px-32">
            <div className="text-3xl p-4 font-semibold">Medium</div>
            <div className="flex flex-row p-6 space-x-10 items-center">
                <div>
                    <Link href={"/auth/membership"}>Membership</Link>
                </div>
                <div>
                    <Link href={"/auth/write"}>Write</Link>
                </div>
                <div>
                    <Link href={"/auth/signin"}>SignIn</Link>
                </div>
                <Link href={"/auth/signup"}>
                    <Button className="rounded-full">
                        <div>Get started</div>
                    </Button>
                </Link>
            </div>
        </div>
    );
};
