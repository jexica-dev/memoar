import React from "react";
import { Link } from "react-router-dom";

export default function MemoButton(props) {
  return (
    <div className="">
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
