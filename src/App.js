import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Amplify from "aws-amplify";
import awsConfig from "./aws-exports";
import Routes from "./containers/Routes/Routes";
import NavbarContainer from "./containers/Navbar/Navbar";
import { IconContext } from "react-icons";
import ProductsContextContainer from "./context/Products/ProductsContextContainer";
import CartContextContainer from "./context/Cart/CartContextContainer";

Amplify.configure(awsConfig);

function App() {
  return (
    <BrowserRouter>
      <ProductsContextContainer>
        <CartContextContainer>
          <IconContext.Provider value={{ className: "icons" }}>
            <div id="site-root">
              <NavbarContainer>
                <Routes />
              </NavbarContainer>
            </div>
          </IconContext.Provider>
        </CartContextContainer>
      </ProductsContextContainer>
    </BrowserRouter>
  );
}

export default App;
