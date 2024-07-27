import { Recommended } from "./sidebar/recommended";
import { WhoToFollow } from "./sidebar/whotofollow";

export const SideBar = () => {
    return (
        <div>
            <div className="p-6">
                <Recommended />
            </div>
            <div className="font-['Figtree'] flex flex-col gap-y-8 p-6">
                <h1 className="font-semibold">Who To Follow</h1>
                <WhoToFollow />
                <WhoToFollow />
                <WhoToFollow />
                <WhoToFollow />
                <WhoToFollow />
                <WhoToFollow />
                <WhoToFollow />
                <WhoToFollow />
                <WhoToFollow />
                <div className="text-sm text-green-700 font-semibold cursor-pointer">
                    See more Topics
                </div>
            </div>
        </div>
    );
};
