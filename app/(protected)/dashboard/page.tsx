import DashBoard from "@/components/dashboard";
import { AppBarLogged } from "@/components/loggedin/appbarlogged";

const SettingsPage = async () => {
    return (
        <div>
            <AppBarLogged />
            <DashBoard />
        </div>
    );
};

export default SettingsPage;
