import { db } from "@/lib/db";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserDetail = async ({ id }: { id: string }) => {
    const userEmail = await db.blog.findUnique({
        where: {
            id: id,
        },
        select: {
            userEmail: true,
        },
    });

    const user = await db.user.findUnique({
        where: {
            email: userEmail.userEmail,
        },
    });
    return (
        <div className="flex flex-row items-center justify-start gap-x-2 ">
            <Avatar>
                <AvatarImage src="" />
                <AvatarFallback>
                    {user.name.substring(0, 1).toUpperCase()}
                </AvatarFallback>
            </Avatar>
            <div className="text-sm capitalize ">{user.name}</div>
        </div>
    );
};

export default UserDetail;
