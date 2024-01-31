import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as HisaLogo } from "./../../assets/hisa-logo.svg";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";
import { UserContext, CartContext } from "../../contexts";
import { signOutUser } from "../../utils/Firebase/Firebase.utils";
import { CartIcon, CardDropDown } from "../../components";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <HisaLogo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          {currentUser && <CartIcon />}
        </NavLinks>
        {currentUser && isCartOpen && <CardDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
