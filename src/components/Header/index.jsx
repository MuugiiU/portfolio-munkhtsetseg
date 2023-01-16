import React from "react";
import VideoPlayer from "react-background-video-player";
import Text from "./Text";
import headercss from "./styles.module.css";

const Header = () => {
  return (
    <div
      id="header"
      className={headercss.container}
      style={{
        height: "80vh",
        position: "relative",
      }}
    >
      <VideoPlayer
        style={{
          height: "100vh",
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

export default Header;
