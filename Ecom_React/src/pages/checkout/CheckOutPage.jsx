import "./checkout-header.css";
import { useState, useEffect } from "react";
import axios from "axios";
import "./checkout.css";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";

export function CheckOutPage({ cart , loadCartItems  }) {
  const [deliveryOption, setDeliveryOption] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    const FetchApi = async () => {
      let response = await axios.get(
        "/api/delivery-options?expand=estimatedDeliveryTime"
      );

      setDeliveryOption(response.data);

      response = await axios.get("/api/payment-summary");
      setPaymentSummary(response.data);
    };

    FetchApi();
  }, [cart]);
  return (
    <>
      <title>Checkout</title>

      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <a href="/">
              <img className="logo" src="images/logo.png" />
              <img className="mobile-logo" src="images/mobile-logo.png" />
            </a>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <a className="return-to-home-link" href="/">
              3 items
            </a>
            )
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary deliveryOption={deliveryOption} cart={cart} loadCartItems={loadCartItems} />

          <PaymentSummary paymentSummary={paymentSummary} loadCartItems={loadCartItems} />
        </div>
      </div>
    </>
  );
}
