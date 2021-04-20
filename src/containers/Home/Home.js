import React from "react";
import { withRouter } from "react-router";
import HomeProducts from "../HomeProducts/HomeProducts";
import styles from "./Home.module.css";
import childImage from "../../assets/images/child-image.png";
import ReactPlayer from "react-player/lazy";

const HomeContainer = () => {
  return (
    <React.Fragment>
      <img
        src={childImage}
        alt="please work"
        className={`${styles["hero-image"]}`}
      />
      <HomeProducts>
        <div className={`${styles["video-wrapper"]}`}>
          <ReactPlayer
            url="https://vimeo.com/243556536"
            playing
            width="100%"
            height="100%"
          />
        </div>
      </HomeProducts>
    </React.Fragment>
  );
};

export default withRouter(HomeContainer);
