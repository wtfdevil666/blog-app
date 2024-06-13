import CardWrapper from "./cardwrapper";
import LoginForm from "./loginform";

const SignInForm = () => {
    return (
        <div className="flex justify-center items-center h-[75vh]">
            <CardWrapper title="SignIn">
                <LoginForm />
            </CardWrapper>
        </div>
    );
};

export default SignInForm;
