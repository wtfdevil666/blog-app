import DailogWrapper from "../auth/dialogwrapper";
import EditForm from "./editform";

const Edit = ({
    id,
    title,
    description,
    content,
}: {
    id: string;
    title: string;
    description: string;
    content: string;
}) => {
    return (
        <div>
            <DailogWrapper buttonTitle="Edit" title="Edit">
                <EditForm
                    id={id}
                    title={title}
                    description={description}
                    content={content}
                />
            </DailogWrapper>
        </div>
    );
};

export default Edit;
