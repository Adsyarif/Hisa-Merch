import "./cart-dropdown.styles.scss";
import { Button, CartItem } from "../index";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../../contexts";

const CardDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckOutHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Button onClick={goToCheckOutHandler}>CHECKOUT</Button>
    </div>
  );
};

export default CardDropDown;
