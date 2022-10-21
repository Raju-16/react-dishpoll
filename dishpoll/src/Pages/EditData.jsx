import React, { useState } from "react";
import { useSelector } from "react-redux";

const Vote = () => {
  const [firstChoice, setFirstChoice] = useState("");
  const [seconedChoice, setSeconedChoice] = useState("");
  const [thirdChoice, setThirdChoice] = useState("");
  const dish = useSelector((state) => state.AppReducer.dish);
  const loggedInUser = useSelector((state) => state.AuthReducer.loggedInUser);
  const [votedData, setVotedData] = useState(
    JSON.parse(localStorage.getItem("allVotedData")) || []
  );
  // console.log("votedData", votedData);
  // console.log("dishhhh", dish);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (votedData && loggedInUser) {
      console.log("I am innerside");
      let editVote = [];
      const user = votedData.filter((ele) => {
        if (ele.id === loggedInUser.id) {
          let selectedData = {};
          selectedData = {
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
          console.log("selectedData", selectedData);
          editVote.push(selectedData);
          localStorage.setItem("userSelection", JSON.stringify(selectedData));
        } else {
          editVote.push(ele);
        }
      });
      localStorage.setItem("allVotedData", JSON.stringify(editVote));
    }
    setVotedData(JSON.parse(localStorage.getItem("allVotedData")));
  };

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
        <input type="submit" value="Edit Your Data" />
      </form>
    </div>
  );
};

export default Vote;
