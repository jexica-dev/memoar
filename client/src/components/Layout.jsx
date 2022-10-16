import React from "react";
import VideoBg from "./VideoBg";

export default function Layout(props) {
  return (
    <div className="w-screen h-screen">
      {props.children}
      {/* <VideoBg /> */}
    </div>
  );
}
