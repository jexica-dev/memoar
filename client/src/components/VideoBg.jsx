import React from "react";
import videoBg from "../../src/images/video_memo.mp4";

export default function VideoBg() {
  return (
    <div className="w-screen h-screen fixed top-0 left-0 min-w-full min-h-full z-0">
      {/* <iframe src={videoBg} style={{ width: "100%" }} frameborder="0"></iframe> */}
      <video autoplay muted loop id="myVideo">
        <source src={videoBg} type="video/mp4" />
      </video>
    </div>
  );
}
