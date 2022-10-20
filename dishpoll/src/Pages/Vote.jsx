import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDishData } from "../Redux/AppReducer/action";

const Vote = () => {
  const dispatch = useDispatch();
  const [firstChoice, setFirstChoice] = useState("");
  const [seconedChoice, setSeconedChoice] = useState("");
  const [thirdChoice, setThirdChoice] = useState("");
  const dish = useSelector((state) => state.AppReducer.dish);
  const navigate = useNavigate();

  if (firstChoice && seconedChoice && thirdChoice) {
    console.log(firstChoice, seconedChoice, thirdChoice);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let userData = JSON.parse(localStorage.getItem("userSelection")) || [];
    let inidivisualData = {
      firstChoice,
      seconedChoice,
      thirdChoice,
    };

    userData.push(inidivisualData);
    localStorage.setItem("userSelection", JSON.stringify(userData));
    navigate("/result", { replace: true });
  };

  useEffect(() => {
    if (dish.length === 0) {
      dispatch(getDishData());
    }
  }, [dish.length, dispatch]);

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <select id="firstDish" onChange={(e) => setFirstChoice(e.target.value)}>
          <option value="">First Priority</option>
          {dish.length > 0 &&
            dish.map((ele) => {
              return (
                <option value={ele.dishName} key={ele.id}>
                  {ele.dishName}
                </option>
              );
            })}
        </select>
        <br />
        <select
          id="secondDish"
          onChange={(e) => setSeconedChoice(e.target.value)}
        >
          <option value="">Second Priority</option>
          {dish.length > 0 &&
            dish.map((ele) => {
              return (
                <option value={ele.dishName} key={ele.id}>
                  {ele.dishName}
                </option>
              );
            })}
        </select>
        <br />
        <select id="thirdDish" onChange={(e) => setThirdChoice(e.target.value)}>
          <option value="">Third Priority</option>
          {dish.length > 0 &&
            dish.map((ele) => {
              return (
                <option value={ele.dishName} key={ele.id}>
                  {ele.dishName}
                </option>
              );
            })}
        </select>
        <input type="submit" value="Vote" />
      </form>
    </div>
  );
};

export default Vote;
