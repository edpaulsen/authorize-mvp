import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/authorize-logo.png";
import styles from "./Navbar.module.css";
import { ROUTE_HOME, ROUTE_LOGIN, ROUTE_SHOP } from "../../utils/constants";
import { MdShoppingCart } from "react-icons/md";

export default function Navbar({
  totalItemsInCart,
  orderHandler,
  isLoggedIn,
  logoutHandler,
}) {
  return (
    <div className={`${styles["container"]}`}>
      <img src={logo} alt="logo here" width="140px" height="120" />
      <h4 className="text-uppercase fs-40 text-align-center mb-20">
        <NavLink to={ROUTE_HOME}>Prototype</NavLink>
      </h4>
      <div className={`mb-20 ${styles["horizontal-separator"]}`}></div>

      {/* icons layout */}
      <div className={`flex-row`}>
        <div className={`${styles["nav-links"]} flex-row`}>
          <NavLink to={ROUTE_HOME}>Home</NavLink>
          <NavLink to={ROUTE_SHOP}>Shop</NavLink>
        </div>
        <div className={`${styles["right-nav-links"]}`}>
          {!isLoggedIn && (
            <NavLink className="cursor-pointer" to={ROUTE_LOGIN}>
              Log In
            </NavLink>
          )}
          {isLoggedIn && <button onClick={logoutHandler}>Log Out</button>}
          <MdShoppingCart className={`cursor-pointer`} onClick={orderHandler} />
          <span>{totalItemsInCart}</span>
        </div>
      </div>
    </div>
  );
}
