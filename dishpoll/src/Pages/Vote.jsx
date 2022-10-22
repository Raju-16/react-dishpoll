import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDishData } from "../Redux/AppReducer/action";
import "../Style/style.css"

const Vote = () => {
  const dispatch = useDispatch();
  const [firstChoice, setFirstChoice] = useState("");
  const [seconedChoice, setSeconedChoice] = useState("");
  const [thirdChoice, setThirdChoice] = useState("");
  const dish = useSelector((state) => state.AppReducer.dish);
  const loggedInUser = useSelector((state) => state.AuthReducer.loggedInUser);
  const navigate = useNavigate();
  console.log("Dish", dish);

  if (firstChoice && seconedChoice && thirdChoice) {
    console.log(firstChoice, seconedChoice, thirdChoice);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    let userData = JSON.parse(localStorage.getItem("allVotedData")) || [];
    let indivisualData = {
      id: loggedInUser.id,
      [firstChoice]: 30,
      [seconedChoice]: firstChoice === seconedChoice ? 30 : 20,
      [thirdChoice]:
        seconedChoice === thirdChoice
          ? 20
          : firstChoice === thirdChoice
          ? 30
          : 10,
    };

    userData.push(indivisualData);
    localStorage.setItem("allVotedData", JSON.stringify(userData));
    localStorage.setItem("userSelection", JSON.stringify(indivisualData));
    navigate("/result", { replace: true });
  };

  useEffect(() => {
    dispatch(getDishData());
  }, [dish.length]);

  return (
    <div id="voteMainDiv">
      <h2>Vote Your Choice</h2>
      <form id="voteForm" onSubmit={handleOnSubmit}>
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
        <br />
        <br />
        <input type="submit" value="Vote" />
      </form>
    </div>
  );
};

export default Vote;
