import "./cart-dropdown.styles.scss";
import { Button, CartItem } from "../index";

import { useContext } from "react";
import { CartContext } from "../../contexts";

const CardDropDown = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
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
      <Button>CHECKOUT</Button>
    </div>
  );
};

export default CardDropDown;
