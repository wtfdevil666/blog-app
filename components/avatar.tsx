import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AvatarComp = ({ src, fallBack }: { src: string; fallBack: string }) => {
    return (
        <div>
            <Avatar>
                <AvatarImage src={src} />
                <AvatarFallback>{fallBack}</AvatarFallback>
            </Avatar>
        </div>
    );
};

export default AvatarComp;
