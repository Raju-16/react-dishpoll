import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="homeMainDiv">
      <img
        src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
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
