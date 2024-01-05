import { useState } from "react";
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

    // if (name === "displayName") {
    //   setUserSignUp((preValue) => {
    //     return {
    //       dislayName: value,
    //       email: preValue.email,
    //       password: preValue.password,
    //       confirmPassword: preValue.confirmPassword,
    //     };
    //   });
    // } else if (name === "email") {
    //   setUserSignUp((preValue) => {
    //     return {
    //       dislayName: preValue.dislayName,
    //       email: value,
    //       password: preValue.password,
    //       confirmPassword: preValue.confirmPassword,
    //     };
    //   });
    // } else if (name === "password") {
    //   setUserSignUp((preValue) => {
    //     return {
    //       dislayName: preValue.dislayName,
    //       email: preValue.email,
    //       password: value,
    //       confirmPassword: preValue.confirmPassword,
    //     };
    //   });
    // } else if (name === "confirmPassword") {
    //   setUserSignUp((preValue) => {
    //     return {
    //       dislayName: preValue.dislayName,
    //       email: preValue.email,
    //       password: preValue.password,
    //       confirmPassword: value,
    //     };
    //   });
    // }
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
            name: "confirmPassowd",
            onChange: handleOnChange,
            type: "password",
            value: confirmPassword,
            required: true,
          }}
        />

        <Button buttonType="google" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
