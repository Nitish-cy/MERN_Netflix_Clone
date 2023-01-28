import React, { useState } from "react";
import "./listItem.scss";
import {
  AiFillCaretLeft,
  AiFillPlusCircle,
  AiFillLike,
  AiFillDislike,
} from "react-icons/ai";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  console.log(item);
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("/movies/find/" + item, {
          headers: {
            token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDE2ODQ2MGE2ODU5YjM4Yjk3YmE1MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDg5MTE4MCwiZXhwIjoxNjc1MzIzMTgwfQ.hNKJWn-NGfXqwlzHdZg-SXVlWONlKmddptTbFT5D6B4",

          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);
  
  return (
    <Link to={{pathname:"/watch", movies:movie}}>
    <div
      className="listIt"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={movie.img} alt="" />
      {isHovered && (
        <>
          <video src={movie.trailer} autoPlay={true} loop></video>
          <div className="itemInfo">
            <div className="icons">
              <AiFillCaretLeft className="icon" />
              <AiFillPlusCircle className="icon" />
              <AiFillLike className="icon" />
              <AiFillDislike className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className="limit">+{item.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="description">{movie.desc}</div>
            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )}
    </div>
    </Link>
  );
};

export default ListItem;
