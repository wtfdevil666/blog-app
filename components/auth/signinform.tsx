import { Social } from "../social";
import CardWrapper from "./cardwrapper";
import LoginForm from "./loginform";

const SignInForm = () => {
    return (
        <div className="flex justify-center items-center h-[75vh]">
            <CardWrapper
                title="SignIn"
                backButtonHref="/auth/signup"
                backButtonLabel="Don't Have An Account?"
            >
                <LoginForm />
                <Social />
            </CardWrapper>
        </div>
    );
};

export default SignInForm;
