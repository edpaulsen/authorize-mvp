import React, { useContext } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { withRouter } from "react-router";
import { CartContext } from "../../context/Cart/CartContext";
import { ROUTE_ORDER } from "../../utils/constants";

const NavbarContainer = ({ children, history }) => {
  const cartContext = useContext(CartContext);

  const orderHandler = () => {
    history.push(ROUTE_ORDER);
  };

  return (
    <React.Fragment>
      <div className="mt-40 mb-100">
        <Navbar
          totalItemsInCart={cartContext.cart.length || 0}
          orderHandler={orderHandler}
        />
      </div>
      {children}
      <div className="mt-100 mb-20">
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default withRouter(NavbarContainer);
