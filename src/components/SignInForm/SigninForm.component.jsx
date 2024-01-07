import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "./../../utils/Firebase/Firebase.utils";
import FormInput from "../FormInput/FormInput.component";
import "./SigninForm.styles.scss";
import "./../Button/Button.component";
import Button from "./../Button/Button.component";

const SignInForm = () => {
  const [userSignUp, setUserSignUp] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userSignUp;

  const handleOnChange = (event) => {
    const { value, name } = event.target;

    setUserSignUp((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      setUserSignUp({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {}
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleOnSubmit}>
        <FormInput
          title="Email"
          inputOptions={{
            name: "email",
            onChange: handleOnChange,
            type: "email",
            value: email,
            required: true,
          }}
        />
        <FormInput
          title="Password"
          inputOptions={{
            name: "password",
            onChange: handleOnChange,
            type: "password",
            value: password,
            required: true,
          }}
        />

        <Button buttonType="google" type="submit">
          Sign In
        </Button>
        <Button buttonType="google" type="submit">
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default SignInForm;
