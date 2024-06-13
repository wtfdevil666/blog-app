import CardWrapper from "./cardwrapper";
import LoginForm from "./loginform";
import RegisterForm from "./registerform";

const SignUpForm = () => {
    return (
        <div className="flex justify-center items-center h-[75vh]">
            <CardWrapper
                title="SignUp"
                backButtonHref="/auth/signin"
                backButtonLabel="Already Have An Account?"
            >
                <RegisterForm />
            </CardWrapper>
        </div>
    );
};

export default SignUpForm;
