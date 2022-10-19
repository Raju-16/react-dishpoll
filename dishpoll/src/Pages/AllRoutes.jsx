import React from "react";
import { Route, Routes } from "react-router-dom";
import Result from "./Result";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/result" element={<Result />} />
      <Route path="/polldata" element={<PollData />} />
    </Routes>
  );
};

export default AllRoutes;
