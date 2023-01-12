import React from "react";
import VideoPlayer from "react-background-video-player";
import Text from "./Text";

const index = () => {
  return (
    <div
      style={{
        height: "70vh",
        position: "relative",
      }}
    >
      <VideoPlayer
        style={{
          height: 900,
          zIndex: 1,
        }}
        src={
          "https://res.cloudinary.com/dv7ollzw5/video/upload/v1619209051/Bloom_Alpha.webm"
        }
        autoPlay={true}
        muted={true}
      />
      <Text />
    </div>
  );
};

export default index;
