import React from "react";
import Layout from "../components/Layout";
import video from "../images/video-compiled.mp4";

export default function Demo() {
  return (
    <Layout>
      <video className="h-full w-full" autoPlay muted loop id="video">
        <source src={video} type="video/mp4" />
      </video>
    </Layout>
  );
}
