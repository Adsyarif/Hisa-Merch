import { useContext, useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
} from "./../../utils/Firebase/Firebase.utils";
import FormInput from "../FormInput/FormInput.component";
import "./SigninForm.styles.scss";
import { UserContext } from "../../contexts";
import { Button, BUTTON_TYPE_CLASSES } from "../index";

const SignInForm = () => {
  const { setCurrentUser } = useContext(UserContext);
  const [userSignUp, setUserSignIn] = useState({
    email: "",
    password: "",
  });

  const logPopupGoogleUser = async () => {
    try {
      const response = await signInWithGooglePopup();
      const { user } = response;
      setCurrentUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  const { email, password } = userSignUp;

  const handleOnChange = (event) => {
    const { value, name } = event.target;

    setUserSignIn((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthWithEmailAndPassword(email, password);
      const { user } = response;
      setUserSignIn({
        email: "",
        password: "",
      });
      setCurrentUser(user);
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          alert("Invalid Account");
          break;
        default:
          console.log(error);
      }
    }
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={logPopupGoogleUser}
          >
            Sign In Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
