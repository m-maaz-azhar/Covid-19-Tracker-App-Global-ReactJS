import React from "react";
import styles from "./Loader.module.css";

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        flexFlow:'column',
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className={styles.ldsFacebook}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h4>Loading...</h4>
    </div>
  );
}

export default Loader;
