import { useContext, useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "./../../utils/Firebase/Firebase.utils";
import FormInput from "../FormInput/FormInput.component";
import "./SignupForm.styles.scss";
import "./../Button/Button.component";
import Button from "./../Button/Button.component";

const SignUpForm = () => {
  const [userSignUp, setUserSignUp] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userSignUp;

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
    password !== confirmPassword && alert("Password Not Match");

    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const { user } = response;

      await createUserDocumentFromAuth(user, { displayName });
      setUserSignUp({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      error.code === "auth/email-already-in-use" &&
        alert("Cannot create user, Email already in use");
      console.log("User createion ecounter an error", error.message);
    }
  };
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleOnSubmit}>
        <FormInput
          title="Display Name"
          inputOptions={{
            name: "displayName",
            onChange: handleOnChange,
            type: "text",
            value: displayName,
            required: true,
          }}
        />
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
        <FormInput
          title="Confirm Password"
          inputOptions={{
            name: "confirmPassword",
            onChange: handleOnChange,
            type: "password",
            value: confirmPassword,
            required: true,
          }}
        />

        <Button buttonType="reverted" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
