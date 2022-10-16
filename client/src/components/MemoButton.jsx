import React from "react";
import { Link } from "react-router-dom";

export default function MemoButton(props) {
  return (
    <div className="">
      <Link to="">
        <div className="font-chillax text-9xl animate-fadein-02 hover:text-stone-700 ">
          MemoAR
        </div>
      </Link>
      <p className=" font-clash text-3xl animate-fadein-03">
        create memo, leave a memory...
      </p>
    </div>
  );
}
