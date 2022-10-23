import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="mainNavbar">
      <div id="div1">Dish</div>
      <div id="div2">
        <Link to={"/polldata"}>
          <p>Poll</p>
        </Link>
        <Link to={"/result"}>
          <p>Result</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
