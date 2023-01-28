import React from "react";
import "./featured.scss";
import { AiFillCaretRight } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import {useState, useEffect } from "react";
import axios from "axios";
const Featured = ({ type }) => {
  const [content,setContent]=useState({});
  useEffect(()=>{
    const getRandomContent=async ()=>{
      try{
          const res=await axios.get(`movies/random?type=${type}`,{
            headers: {
              token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDE2ODQ2MGE2ODU5YjM4Yjk3YmE1MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDg5MTE4MCwiZXhwIjoxNjc1MzIzMTgwfQ.hNKJWn-NGfXqwlzHdZg-SXVlWONlKmddptTbFT5D6B4",
  
            },
          });
          console.log(res.data);
          setContent(res.data[0]);
      }catch(err){
          console.log(err);
      }
    };
    getRandomContent();
   },[type]) //type is a dependency
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="gener" id="gener">
            <option>Gener</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantsy">Fantsy</option>
            <option value="historiacal">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
          </select>
        </div>
      )}
      <img
        src={content.img}
         alt=""
      />
      <div className="info">
        <img
          src={content.imgTitle}
            alt=""
        />
        <span className="desc">
          {content.desc}
        </span>
        <div className="but">
          <button className="paly">
            <span>
              <AiFillCaretRight></AiFillCaretRight>Play
            </span>
          </button>
          <button className="Info1">
            <span>
              <BsInfoCircle></BsInfoCircle>Info
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
