import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

interface DailogWrapperProps {
    children: React.ReactNode;
    buttonTitle: string;
    title: string;
}

const DailogWrapper = ({
    children,
    buttonTitle,
    title,
}: DailogWrapperProps) => {
    return (
        <div>
            <Dialog>
                <DialogTrigger >{buttonTitle}</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="text-xl text-center py-4">
                            {title}
                        </DialogTitle>
                        <DialogDescription>{children}</DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default DailogWrapper;
