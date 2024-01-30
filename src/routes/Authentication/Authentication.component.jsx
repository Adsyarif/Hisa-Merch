import { SignUpForm, SignInForm } from "../../components";
import "./Aythentucation.stles.scss";
import { UserContext } from "../../contexts";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  return (
    <>
      {!currentUser ? (
        <div className="authentication-container">
          <SignInForm />
          <SignUpForm />
        </div>
      ) : (
        navigate("/")
      )}
    </>
  );
};

export default Authentication;
