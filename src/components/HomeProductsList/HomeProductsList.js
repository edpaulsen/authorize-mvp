import React from "react";
import styles from "./HomeProductsList.module.css";
import ProductsList from "../ProductsList/ProductsList.js";
import { withRouter } from "react-router";
import { ROUTE_SHOP } from "../../utils/constants";

const HomeProductsList = ({ children, history }) => {
  return (
    <React.Fragment>
      <div className={`flex-column align-items-center pt-20`}>
        <h1 className={`fs-72 text-uppercase`}>Buy Products</h1>
        <button
          className={`mt-40 mb-40 cursor-pointer ${styles["products-button"]}`}
          onClick={() => history.push(ROUTE_SHOP)}
        >
          Products
        </button>
      </div>
      {children}
      <div className={`mt-20 mb-20`}>
        <ProductsList />
      </div>
    </React.Fragment>
  );
};

export default withRouter(HomeProductsList);
