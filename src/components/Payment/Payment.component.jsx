import { Button, BUTTON_TYPE_CLASSES } from "../index";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts";
import "./Payment.style.scss";
import { Link } from "react-router-dom";

const Payment = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    exp: "",
    cvc: "",
  });

  const product = (items) => {
    const storage = [];
    items.map((item) => {
      storage.push(`${item.name} x${item.quantity}`);
    });
    return storage.join(", ");
  };

  const handleChangeNumber = (event) => {
    const searchField = event.target.value;

    setCardInfo((preVal) => {
      return {
        ...preVal,
        cardNumber: searchField,
      };
    });
  };

  const handleChangeYear = (event) => {
    const searchField = event.target.value;

    setCardInfo((preVal) => {
      return {
        ...preVal,
        exp: searchField,
      };
    });
  };

  const handleChangeCVC = (event) => {
    const searchField = event.target.value;

    setCardInfo((preVal) => {
      return {
        ...preVal,
        cvc: searchField,
      };
    });
  };

  const handleClick = (cardInfo, cartTotal) => {
    return cardInfo.cardNumber && cardInfo.exp && cardInfo.cvc && cartTotal
      ? alert(
          `Payment Success for this items ${product(
            cartItems
          )} with total ammount $${cartTotal}! Please Contact to Admin for shipping order!`
        )
      : alert("Please input your Card Detail.");
  };

  return (
    <div className="payment-container">
      <h2>Credit Card Payment:</h2>
      <form className="form-payment-container">
        <input
          className="card-number"
          type="number"
          placeholder="Card number"
          value={cardInfo.cardNumber}
          onChange={handleChangeNumber}
        />
        <input
          className="card-year"
          type="month"
          placeholder="MM/YY"
          value={cardInfo.exp}
          onChange={handleChangeYear}
        />
        <input
          className="card-cvc"
          type="password"
          placeholder="CVC"
          value={cardInfo.cvc}
          onChange={handleChangeCVC}
        />
      </form>
      <div className="container-button-payement">
        <div className="button-container">
          <Button onClick={() => handleClick(cardInfo, cartTotal)}>
            PAY NOW
          </Button>
        </div>
        <div className="button-container">
          <Link
            to={
              cartTotal != 0
                ? `https://api.whatsapp.com/send/?phone=${6285603770067}&text=Halo, I want to buy this items ${product(
                    cartItems
                  )} with total ammount $${cartTotal}&type=phone_number&app_absent=0`
                : `https://api.whatsapp.com/send/?phone=${6285603770067}&text=Halo, I want to know more about promoted item in Hisa Store&type=phone_number&app_absent=0`
            }
          >
            <Button buttonType={BUTTON_TYPE_CLASSES.google}>
              Contact to Admin
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Payment;
