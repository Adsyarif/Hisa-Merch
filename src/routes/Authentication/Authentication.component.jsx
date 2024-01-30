import { SignUpForm, SignInForm } from "../../components";
import "./Aythentucation.stles.scss";
import { UserContext } from "../../contexts";
import { useContext } from "react";

const Authentication = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
