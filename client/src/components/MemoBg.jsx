import React, { useEffect, useRef } from "react";
import imageBg from "../../src/images/v-bg.png";

export default function MemoBg() {
  let myRef = useRef();

  useEffect(() => {
    myRef.current.muted = true;
    myRef.current.play();
  }, []);

  return (
    <div
      style={{ zindex: "-50" }}
      className="w-screen h-screen fixed bottom-0 right-0 min-w-full min-h-full"
    >
      {/* <iframe
        autoplay
        muted
        loop
        src={videoBg}
        style={{ width: "100%" }}
        frameborder="0"
      ></iframe> */}

      <img src={imageBg} alt="" srcset="" width="100vw" />
    </div>
  );
}
