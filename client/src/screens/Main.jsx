import React from "react";
import Layout from "../components/Layout";
import MemoButton from "../components/MemoButton";

export default function Main() {
  return (
    <>
      <Layout>
        <div className="w-full h-full flex flex-col m-auto  place-content-center content-center text-center">
          <div className="">
            <MemoButton />
          </div>
        </div>
      </Layout>
    </>
  );
}
