import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as HisaLogo } from "./../../assets/hisa-logo.svg";
import "./navigation.styles.scss";
import { UserContext, CartContext } from "../../contexts";
import { signOutUser } from "../../utils/Firebase/Firebase.utils";
import { CartIcon, CardDropDown } from "../../components";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <HisaLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CardDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
