import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import WriteArea from "./writearea";

const Editor = () => {
    return (
        <div className="flex justify-center items-center pt-[5vh]">
            <Card className="w-[800px] shadow-md">
                <CardHeader>
                    <CardTitle className="text-center">Write</CardTitle>
                </CardHeader>
                <CardContent>
                    <WriteArea />
                </CardContent>
                <CardFooter></CardFooter>
            </Card>
        </div>
    );
};

export default Editor;
