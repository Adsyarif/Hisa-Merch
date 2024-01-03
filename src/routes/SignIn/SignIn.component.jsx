import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/Firebase/Firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const { user } = response;
    console.log(response);
    console.log(user);
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };
  return (
    <dib>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </dib>
  );
};

export default SignIn;
