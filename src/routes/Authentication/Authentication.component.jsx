import { SignUpForm, SignInForm } from "../../components";
import "./Aythentucation.stles.scss";
const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
