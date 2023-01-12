import VideoPlayer from "react-background-video-player";

import "./style.css";
function Background() {
  return (
    <div className="App">
      <VideoPlayer
        className="video"
        src={
          "https://res.cloudinary.com/dv7ollzw5/video/upload/v1619209051/Bloom_Alpha.webm"
        }
        autoPlay={true}
        muted={true}
      />
      <div className="mainInput">
        <input
          className="input"
          type="text"
          name="name"
          placeholder="Where to?"
        />
      </div>
    </div>
  );
}
export default Background;
