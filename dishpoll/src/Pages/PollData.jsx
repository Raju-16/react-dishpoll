import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDishData } from "../Redux/AppReducer/action";
import DishCard from "./DishCard";
import "../Style/style.css";
import Vote from "./Vote";
import Navbar from "../Components/Navbar";

const PollData = () => {
  const dispatch = useDispatch();
  const dish = useSelector((state) => state.AppReducer.dish);

  useEffect(() => {
    if (dish.length === 0) {
      dispatch(getDishData());
    }
  }, [dish, dispatch]);

  return (
    <>
      <Navbar />
      <div className="pollMainDiv">
        <div className="pollDiv">
          {dish.length > 0 &&
            dish.map((ele) => {
              return <DishCard dish={ele} key={ele.id} />;
            })}
        </div>
        <div id="voteDiv">
          <Vote />
        </div>
      </div>
    </>
  );
};

export default PollData;
