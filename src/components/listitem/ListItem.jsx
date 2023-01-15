import React, { useState } from "react";
import "./listItem.scss";
import {
  AiFillCaretLeft,
  AiFillPlusCircle,
  AiFillLike,
  AiFillDislike,
} from "react-icons/ai";
const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const trailer =
    "https://encrypted-vtbn0.gstatic.com/video?q=tbn:ANd9GcRX91AcsNK-E5XJ1am55QXRKSIIF9Tu6NmrWw";
  return (
    <div
      className="listIt"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqXTUX9zCbUff7zPfHKb_IPlEKeD87JXppgw&usqp=CAU"
        alt=""
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop></video>
          <div className="itemInfo">
            <div className="icons">
              <AiFillCaretLeft className="icon" />
              <AiFillPlusCircle className="icon"/>
              <AiFillLike className="icon"/>
              <AiFillDislike className="icon"/>
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
              cupiditate perferendis alias tempore in incidunt iusto, et nam
              sunt,
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
