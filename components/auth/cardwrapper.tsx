import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Children } from "react";

interface CardWrapperProps {
    children: React.ReactNode;
    title: string;
}

const CardWrapper = ({ children, title }: CardWrapperProps) => {
    return (
        <div>
            <Card className="w-[400px] shadow-md">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>{children}</CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </div>
    );
};

export default CardWrapper;
