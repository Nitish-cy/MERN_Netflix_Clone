import React, { useState } from "react";
import "./list.scss";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { useRef } from "react";
import ListItem from "../listitem/ListItem";

export default function List({list}) {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);
  const listRef = useRef(); //same as query selector and getelement by id
  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`; //bcz container size 225 + 5 (margin between container)
    }
    if (direction === "right" && slideNumber < 4) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`; //bcz container size 225 + 5 (margin between container)
    }
  };
  return (
    <div className="listn">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <AiFillCaretLeft
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {/* <ListItem index={0}></ListItem>
          <ListItem index={1}></ListItem>
          <ListItem index={2}></ListItem>
          <ListItem index={3}></ListItem>
          <ListItem index={4}></ListItem>
          <ListItem index={5}></ListItem>
          <ListItem index={6}> </ListItem>
          <ListItem index={7}></ListItem>
          <ListItem index={8}></ListItem>
          <ListItem index={9}></ListItem> */}
          {list.content.map((item,i)=>(
           <ListItem index={i} item={item}></ListItem>
          ))}
        </div>
        <AiFillCaretRight
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
