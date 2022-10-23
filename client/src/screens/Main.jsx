import React from "react";
import Layout from "../components/Layout";
import MemoButton from "../components/MemoButton";
// import MemoBg from "../components/MemoBg";
import vBg from "../images/v-bg.png";


export default function Main() {
  return (
    <>
      <Layout>
        <div className="w-full h-full flex flex-col m-auto  place-content-center content-center text-center">
          <div className="relative">
            <div className="z-10">
              <MemoButton />
            </div>
          </div>
          <img
            style={{ zIndex: "-10", opacity: ".5" }}
            className=" animate-fadein-03 absolute left-0"
            src={vBg}
            alt=""
            srcset=""
          />
        </div>
      </Layout>
    </>
  );
}
