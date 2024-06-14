import Link from "next/link";
import AvatarComp from "../avatar";
import { auth } from "@/auth";
import { headers } from "next/headers";

export const AppBarLogged = async () => {
    const session = await auth();
    if (!session.user) return null;
    const headerList = headers();
    const pathname = headerList.get("current-path");
    
    return (
        <div className="w-full border-b-[1px] border-black h-[76px] flex flex-row items-center justify-between px-32">
            <div className="text-3xl p-4 font-semibold">Medium</div>
            <div className="flex flex-row p-6 space-x-10 items-center">
                <div>
                    <Link href={"/auth/membership"}>Membership</Link>
                </div>

                <div>
                    {pathname == "/write" ? (
                        <Link href={"/dashboard"}>DashBoard</Link>
                    ) : (
                        <Link href={"/write"}>Publish</Link>
                    )}
                </div>
                <Link href={"/auth/signup"}>
                    <AvatarComp
                        src={session.user.image}
                        fallBack={session.user.name
                            .substring(0, 1)
                            .toUpperCase()}
                    />
                </Link>
            </div>
        </div>
    );
};
