import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" fixed z-50 top-0 flex flex-col w-full place-content-center pt-3 bg-white filter drop-shadow-sm">
      <div className=" pl-5 pb-3">
        <button onClick={handleToggle}>
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </button>
      </div>
      <ul
        style={
          !isOpen ? { display: "none" } : { display: "", fontSize: "10vw" }
        }
        className={
          !isOpen ? "hide" : " flex flex-col text-black items-center h-screen"
        }
      >
        <li className="hover:text-gray-500">
          <Link to="/"> Play </Link>
        </li>
        <li className="hover:text-gray-500">
          <Link to="/about"> About </Link>
        </li>
        <li className="hover:text-gray-500">
          <Link to="/demo"> Demo </Link>
        </li>
      </ul>
    </div>
  );
}
