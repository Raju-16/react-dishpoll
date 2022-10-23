import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import PollData from "./PollData";
import Result from "./Result";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/result" element={<Result />} />
      <Route path="/polldata" element={<PollData />} />
    </Routes>
  );
};

export default AllRoutes;
