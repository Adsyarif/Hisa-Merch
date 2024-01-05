import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import { SignUpForm } from "../../components";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/Firebase/Firebase.utils";

const SignIn = () => {
  const logPopupGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const { user } = response;
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(response);
    console.log(user);
    console.log(userDocRef);
  };

  //   useEffect(
  //     () => async () => {
  //       const response = await getRedirectResult(auth);
  //       if (response) {
  //         const { user } = response;
  //         const userDocRef = await createUserDocumentFromAuth(user);
  //       }
  //     },
  //     []
  //   );

  //   const logGoogleReDirectUser = async () => {
  //     const response = await signInWithGoogleRedirect();
  //     const { user } = response;
  //     const userDocRef = await createUserDocumentFromAuth(user);

  //     console.log(user);
  //   };
  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logPopupGoogleUser}>Sign in with Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
