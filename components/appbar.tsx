import Link from "next/link";
import { Button } from "./ui/button";
import { auth } from "@/auth";
import AvatarComp from "./avatar";
import SignOut from "./loggedin/signout";

export const AppBar = async () => {
    const session = await auth();
    return (
        <div className="w-full border-b-[1px] border-black h-[76px] flex flex-row items-center justify-between px-32">
            <div className="text-3xl p-4 font-semibold">
                <Link href={"/"}>Medium</Link>
            </div>
            <div className="flex flex-row p-6 space-x-10 items-center">
                <div>
                    <Link href={"/auth/membership"}>Membership</Link>
                </div>
                <div>
                    <Link href={"/write"}>Write</Link>
                </div>
                <div>
                    {session?.user ? (
                        <AvatarComp
                            src={session.user.image}
                            fallBack={session.user.name
                                .substring(0, 1)
                                .toUpperCase()}
                        />
                    ) : (
                        <Link href={"/auth/signin"}>SignIn</Link>
                    )}
                </div>
                {session?.user ? (
                    <SignOut />
                ) : (
                    <Link href={"/auth/signup"}>
                        <Button className="rounded-full">
                            <div>Get started</div>
                        </Button>
                    </Link>
                )}
            </div>
        </div>
    );
};
