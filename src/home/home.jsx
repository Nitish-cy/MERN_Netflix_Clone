import React from "react";
import Featured from "../components/featured/Featured";
import List from "../components/list/List";
import Navbar from "../components/Navbar";
//import { FaBeer } from "react-icons/fa";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <Navbar></Navbar>
      <Featured type="movie" />
      <List></List>
      <List></List>
      <List></List>
      <List></List>
      <List></List>
      <List></List>
      <List></List>
    </div>
  );
};

export default Home;