import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
//import { AxiosContext } from "react-axios/lib/components/AxiosProvider";
import Featured from "../components/featured/Featured";
import List from "../components/list/List";
import Navbar from "../components/Navbar";
//import { FaBeer } from "react-icons/fa";
import "./home.scss";
const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);
  useEffect(() => {
    const getRandomLists = async () => {
      try {
        //for calling api we can use js fetch but axios is easy and good
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZDE2ODQ2MGE2ODU5YjM4Yjk3YmE1MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NDg5MTE4MCwiZXhwIjoxNjc1MzIzMTgwfQ.hNKJWn-NGfXqwlzHdZg-SXVlWONlKmddptTbFT5D6B4",
            },
          }
        );
        console.log(res.data);
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar></Navbar>
      <Featured type={type} />
      {lists.map((list)=>(
        <List list={list}></List>
      )
      )}
    </div>
  );
};

export default Home;
