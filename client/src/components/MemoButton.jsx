import React from "react";
import { Link } from "react-router-dom";
import arrow from "../images/arrow.svg";

export default function MemoButton(props) {
  return (
    <div className="">
      <div className="w-screen flex flex-col  place-items-center place">
        <div className=" animate-fadein-03 mb-10">
          <img
            className=" animate-bounce-slow  place-items-center "
            src={arrow}
            alt=""
            width="100px"
            srcset=""
          />
        </div>
      </div>
      <a href="https://interactiveknowledge.8thwall.app/vps-bespoke">
        <div className="font-chillax text-7xl lg:text-[200px] md:text-9xl sm:text-7xl animate-fadein-02 hover:text-stone-700 ">
          MemoAR
        </div>
      </a>
      <p className=" font-clash text-3xl animate-fadein-03">
        create a memo, leave a memory...
      </p>
    </div>
  );
}
