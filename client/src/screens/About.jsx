import React from "react";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className=" pt-16 px-14  w-full ">
        <div className="lg:w-132 md:w-132 sm:w-full">
          <div className="pt-10 pb-5 font-semibold text-5xl text-black ">
            MemoAR
          </div>
          <div className=" leading-7 tracking-wide text-sm">
            <h3>Hackathon: </h3>
            <p className="font-medium">
              Niantic's VPS Developer World Tour Build-a-thon
            </p>
            <h3>Location:</h3>
            <p className="font-medium"> ZeroSpace Brooklyn, NY</p>
            <h3>Dates:</h3>{" "}
            <p className="font-medium">10/14/2022 - 10/16/2022</p>
            <h3>Team:</h3>
            <p className="font-medium">
              Philip Curley, Jexica Ayran, Rose Stanley, Eric Veal{" "}
            </p>
            <h3 className="font-medium underline underline-offset-2">
              {" "}
              <a href="https://itch.io/jam/lightship-vps-world-tour-nyc/rate/1747643">
                Itch Submission
              </a>{" "}
            </h3>
            <p className="pt-5">
              MemoAR is a poetic AR experience that redefines traditional
              monuments as "memos" with modern, playful sculptures and written
              notes on any Lightship VPS-enabled wayspot anchor.
            </p>
          </div>
        </div>
        <div className=" lg:float-right w-full lg:w-1/2 h-128 lg:top-20 pt-16 lg:fixed lg:right-0 pb-16">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/WRO_f5qXGx4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </Layout>
  );
}
