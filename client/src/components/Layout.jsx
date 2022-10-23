import React from "react";
import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      {props.children}
    </div>
  );
}
