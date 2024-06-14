import { signOut } from "@/auth";
import { Button } from "../ui/button";

const SignOut = () => {
    return (
        <form
            action={async () => {
                "use server";
                await signOut();
            }}
        >
            <Button type="submit" className="rounded-full">
                Sign Out
            </Button>
        </form>
    );
};

export default SignOut;
