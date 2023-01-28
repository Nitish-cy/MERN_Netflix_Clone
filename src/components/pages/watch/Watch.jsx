import React from "react";
import "./watch.scss";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
const Watch = () => {
  //const location=useLocation();
  //const movie=location.movie;
  return (
    <div className="watch">
      <Link to="/">
      <div className="back">
        <AiOutlineArrowLeft />
        Home
      </div>
      </Link>
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
