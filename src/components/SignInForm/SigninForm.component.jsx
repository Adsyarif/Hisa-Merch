import Button from "../Button/Button.component";
import FormInput from "../FormInput/FormInput.component";

const SignInForm = () => {
  return (
    <>
      <div>
        <h2>I already hav an account</h2>
        <p>Sign in with your email and password</p>
      </div>
      <div>
        <form>
          <FormInput />
          <FormInput />
          <Button></Button>
          <Button></Button>
        </form>
      </div>
    </>
  );
};
