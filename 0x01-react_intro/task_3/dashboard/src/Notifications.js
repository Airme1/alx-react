import React from "react";
import { getLatestNotification } from "./utils";
import close from "./close-icon.svg";
import "./Notifications.css";

export function Notifications() {
  const handleClick = () =>{
    console.log("Close button has been clicked");
  };
  return (
    <div className="Notifications">
      <div className="top">
        <p>Here is the list of notifications</p>
        <button onClick={handleClick}><img src={close} /></button>
      </div>
      <ul>
        <li>New course available</li>
        <li>New resume available</li>
        <li>{getLatestNotification()}</li>
      </ul>
    </div>
  );
}
