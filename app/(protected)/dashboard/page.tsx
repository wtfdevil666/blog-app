import { auth, signOut } from "@/auth";
import { AppBarLogged } from "@/components/loggedin/appbarlogged";

const SettingsPage = async () => {
    const session = await auth();
    return (
        <div>
            <AppBarLogged />
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
