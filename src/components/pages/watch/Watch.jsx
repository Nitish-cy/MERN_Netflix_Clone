import React from "react";
import "./watch.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";
const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <AiOutlineArrowLeft />
        Home
      </div>
      <video
        className="video"
        autoPlay
        onProgress
        controls
        src="https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcTx6RxzBbDP9jZut41v8MRxtez2bwpZBdKHVg"
      ></video>
    </div>
  );
};

export default Watch;
