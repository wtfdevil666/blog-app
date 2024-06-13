import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Children } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface CardWrapperProps {
    children: React.ReactNode;
    title: string;
    backButtonLabel: string;
    backButtonHref: string;
}

const CardWrapper = ({
    children,
    title,
    backButtonHref,
    backButtonLabel,
}: CardWrapperProps) => {
    return (
        <div>
            <Card className="w-[400px] shadow-md">
                <CardHeader>
                    <CardTitle className="text-center">{title}</CardTitle>
                </CardHeader>
                <CardContent>{children}</CardContent>
                <CardFooter>
                    <Button variant={"link"} className="w-full">
                        <Link href={backButtonHref}>{backButtonLabel}</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default CardWrapper;
