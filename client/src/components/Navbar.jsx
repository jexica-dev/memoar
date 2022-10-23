import React from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="nav-container">
      <button onClick={setOpen((prevState) => !prevState)}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </button>
      <ul
        style={
          !navOpen ? { display: "none" } : { display: "", fontSize: "10vw" }
        }
        className={
          !navOpen
            ? "hide"
            : " flex flex-col text-left justify-center text-black  "
        }
      >
        <li>
          <Link to="/about"> About </Link>
        </li>
        <li>
          <Link to="/about"> Demo </Link>
        </li>
      </ul>
    </div>
  );
}
