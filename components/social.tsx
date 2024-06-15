"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Social = () => {
    
    return (
        <div className="flex items-center w-full gap-x-2 pt-4">
            <Button
                size={"lg"}
                variant={"outline"}
                className="w-full"
                onClick={() => {}}
            >
                <FcGoogle className="w-5 h-5" />
            </Button>
            <Button
                size={"lg"}
                variant={"outline"}
                className="w-full"
                onClick={() => {}}
            >
                <FaGithub className="w-5 h-5" />
            </Button>
        </div>
    );
};
