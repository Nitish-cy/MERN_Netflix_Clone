import React, { useState } from "react";
import "./navbar.scss";
import { FaSearch} from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
const Navbar = () => {
    const [isScrolled,setIsScrolled] = useState(false);
    window.onscroll=()=>{
        setIsScrolled(window.pageXOffset===0?false:true);
        return()=>(window.onscroll=null);
    };
  return (
    <div className={isScrolled?"navbar1":"navbar1 scrolled"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/1920px-Netflix_2014_logo.svg.png"
            alt="netflix_logo"
          />
          <span>Home</span>
          <span>Series</span>
          <span>Movie</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <FaSearch className="icon"/>
          <span>KID</span>
          <FaSearch className="icon"/>
          <img src="data:image/jpeg;base64,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" alt="" />
          <div className="profile">
          <AiFillCaretDown className="icon"/>
            <div className="options">
                <span>Settings</span>
                <span>LogOut</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
