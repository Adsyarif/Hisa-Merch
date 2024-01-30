import "./cart-dropdown.styles.scss";
import { Button } from "../index";

const CardDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>CHECKOUT</Button>
    </div>
  );
};

export default CardDropDown;
