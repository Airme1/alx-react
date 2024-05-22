import React from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  app_header: {
    fontSize: "1.4rem",
    color: "#e0354b",
    display: "flex",
    alignItems: "center",
    borderBottom: "3px solid #e0354b",
  },

  app_img: {
    width: 200,
    height: 200,
  },
});

function Header() {
  return (
    <>
      <div className="App-header" style={app_header}>
        <img src={logo} className="App-logo" alt="logo" style={app_img} />
        <h1>School dashboard</h1>
      </div>
    </>
  );
}

export default Header;
