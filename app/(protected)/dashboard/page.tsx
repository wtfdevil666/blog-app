import { auth, signOut } from "@/auth";
import { AppBar } from "@/components/appbar";

const SettingsPage = async () => {
    const session = await auth();
    return (
        <div>
            <AppBar />
            {JSON.stringify(session)}
            <form
                action={async () => {
                    "use server";
                    await signOut();
                }}
            >
                <button type="submit">Signout</button>
            </form>
        </div>
    );
};

export default SettingsPage;
