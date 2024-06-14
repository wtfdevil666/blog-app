import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const User = ({ fallBack }: { fallBack: string }) => {
    return (
        <div>
            <Avatar>
                <AvatarImage src={""} />
                <AvatarFallback>{fallBack}</AvatarFallback>
            </Avatar>
        </div>
    );
};

export default User;
