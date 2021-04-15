import React, { useContext } from "react";
import { withRouter } from "react-router";
import CartList from "../../components/CartList/CartList";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import { CartContext } from "../../context/Cart/CartContext";
import { processOrderPayment } from "./Order.service";
import { showToast } from "../../utils/common";

const OrderContainer = () => {
  const cartContext = useContext(CartContext);

  const removeFromCartHandler = (productId) => {
    cartContext.removeFromCart(productId);
  };

  const updateCardQuantity = (product, quantity) => {
    cartContext.addItemToCart(product, quantity);
  };

  const checkoutHandler = async () => {
    showToast("Login is required before placing order.");
    // if (cartContext.totalPrice) {
    //   const cardInfo = {
    //     cc: "4242424242424242",
    //     cvv: "999",
    //     expire: "0822",
    //   };
    //   const productIds = cartContext.cart.map((item) => item.id);
    //   console.log(productIds);
    //   await processOrderPayment(cardInfo, cartContext.totalPrice, productIds);
    // }
  };

  return cartContext.cart.length ? (
    <div className={`flex-row`}>
      <CartList
        cartItems={cartContext.cart}
        removeFromCartHandler={removeFromCartHandler}
        updateCardQuantity={updateCardQuantity}
      />
      <OrderSummary
        totalPrice={cartContext.totalPrice}
        checkoutHandler={checkoutHandler}
      />
    </div>
  ) : (
    <p>No items in cart.</p>
  );
};

export default withRouter(OrderContainer);
