import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import { getDishData } from "../Redux/AppReducer/action";
import "../Style/style.css";

const Result = () => {
  const dispatch = useDispatch();
  const [firstChoice, setFirstChoice] = useState("");
  const [seconedChoice, setSeconedChoice] = useState("");
  const [thirdChoice, setThirdChoice] = useState("");
  const dish = useSelector((state) => state.AppReducer.dish);
  const loggedInUser = useSelector((state) => state.AuthReducer.loggedInUser);
  const [votedData, setVotedData] = useState(
    JSON.parse(localStorage.getItem("allVotedData")) || []
  );
  const [finalScore, setFinalScore] = useState();
  const [decresing, setDecresing] = useState();
  const [favDish, setFavDish] = useState([]);
  const [result, setResult] = useState();
  console.log("finalScore", finalScore);
  // console.log("votedData", votedData);
  console.log("dishhhh", dish);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (votedData && loggedInUser) {
      let editVote = [];
      votedData.filter((ele) => {
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
          // console.log("selectedData", selectedData);
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

  useEffect(() => {
    const data = {};
    votedData.length &&
      votedData.map((ele) => {
        for (const [key, value] of Object.entries(ele)) {
          if (key !== "id") {
            // {
            //   data[key] === data[key] ? data[key] + value : value;
            // }
            if (data[key] === undefined) {
              data[key] = value;
            } else {
              data[key] += value;
            }
          }
        }
      });
    setFinalScore(data);
  }, [votedData]);

  useEffect(() => {
    if (finalScore) {
      let sortData = [];
      for (var dish in finalScore) {
        sortData.push([dish, finalScore[dish]]);
      }
      sortData.sort(function (a, b) {
        return b[1] - a[1];
      });
      // console.log("sortData", sortData);/
      setDecresing(sortData);
    }
  }, [finalScore]);

  useEffect(() => {
    let favFood = JSON.parse(localStorage.getItem("userSelection"));
    let favFoodArr = [];
    for (let key in favFood) {
      if (key !== "id") {
        favFoodArr.push(key);
      }
    }
    setFavDish(favFoodArr);
  }, [decresing]);

  useEffect(() => {
    let newArr = [];

    if (decresing && favDish) {
      for (let i = 0; i < decresing.length; i++) {
        var condition = true;
        for (var j = 0; j < favDish.length; j++) {
          if (decresing[i][0] === favDish[j]) {
            newArr.push(["USER VOTE :--", decresing[i][0], decresing[i][1]]);
            condition = false;
            break;
          } else {
            continue;
          }
        }
        if (condition) {
          newArr.push("OTHER'S VOTE", [decresing[i][0], decresing[i][1]]);
        }
      }
    }
    console.log("NewArr", newArr);
    setResult(newArr);
  }, [decresing, favDish]);
  // console.log("Result", result);

  useEffect(() => {
    if (dish.length === 0) {
      dispatch(getDishData());
    }
  }, [dish, dispatch]);

  return (
    <>
      <Navbar />
      <div className="resultMainDiv">
        <div className="resultTextDiv">
          <h1>Poll Results</h1>
          {result &&
            result.map((ele) => {
              return (
                <h3 key={ele[1]}>
                  {ele[0]} {ele[1]} {ele[2]}
                </h3>
              );
            })}
        </div>
        <div id="resultSelectionDiv">
          <h1>Edit Your Choice</h1>
          <form id="resultForm" onSubmit={handleOnSubmit}>
            <select
              id="firstDish"
              onChange={(e) => setFirstChoice(e.target.value)}
            >
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
            <select
              id="thirdDish"
              onChange={(e) => setThirdChoice(e.target.value)}
            >
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
            <input type="submit" value="Edit Your Data" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Result;
