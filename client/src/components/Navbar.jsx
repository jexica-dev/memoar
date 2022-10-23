import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" fixed z-50 top-0 flex flex-col w-full justify-around pt-3">
      <button onClick={handleToggle}>
        <Hamburger toggled={isOpen} toggle={setIsOpen} />
      </button>
      <ul
        style={
          !isOpen ? { display: "none" } : { display: "", fontSize: "10vw" }
        }
        className={
          !isOpen ? "hide" : " flex flex-col justify-center text-black  "
        }
      >
        <li>
          <Link to="/about"> Home </Link>
        </li>
        <li>
          <Link to="/about"> About </Link>
        </li>
        <li>
          <Link to="/demo"> Demo </Link>
        </li>
      </ul>
    </div>
  );
}
