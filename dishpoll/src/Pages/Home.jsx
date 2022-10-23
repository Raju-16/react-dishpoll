import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="homeMainDiv">
      <img
        src="https://b.zmtcdn.com/data/dish_photos/1a6/48cd02ca83419f5f7db384dd2cf161a6.jpg"
        alt="home-page"
        width={"100%"}
        height={"100%"}
      />
      <Link to={"/login"}>
        <button>Log In</button>
      </Link>
    </div>
  );
};

export default Home;
