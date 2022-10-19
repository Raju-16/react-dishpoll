import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDishData } from "../Redux/AppReducer/action";
import DishCard from "./DishCard";
// import "./Style/style.css";
import "./style2.css";

const PollData = () => {
  const dispatch = useDispatch();
  const dish = useSelector((state) => state.AppReducer.dish);
  console.log("dish", dish);

  useEffect(() => {
    if (dish.length === 0) {
      dispatch(getDishData());
    }
  }, [dish, dispatch]);

  return (
    <div className="PollMain">
      {dish.length > 0 &&
        dish.map((ele) => {
          return <DishCard dish={ele} key={ele.id} />;
        })}
    </div>
  );
};

export default PollData;
