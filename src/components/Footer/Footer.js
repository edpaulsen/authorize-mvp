import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className={`flex-column`}>
      <div
        className={`flex-row justify-content-center ${styles["social-icons"]}`}
      >
        <FaFacebookF />
        <FaTwitter />
        <FaLinkedinIn />
      </div>
    </div>
  );
}
