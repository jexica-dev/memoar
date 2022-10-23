import React from "react";
import Navbar from "./Navbar.jsx";

export default function Layout(props) {
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen">{props.children}</div>
    </>
  );
}
