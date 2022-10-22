import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postUserData } from "../Redux/AuthReducer/action";
import { POST_DATA_SUCCESS } from "../Redux/AuthReducer/actionType";
import "../Style/style.css";

const Login = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // post user data(login Details) in user.json file
  const handleOnSubmit = (e) => {
    e.preventDefault();

    let params;
    if (userName && password) {
      params = {
        userName,
        password,
      };

      dispatch(postUserData(params)).then((res) => {
        if (res === POST_DATA_SUCCESS) {
          navigate("/polldata", { replace: true });
        }
      });
    }
  };

  return (
    <div className="loginMainDiv">
      <form id="loginForm" onSubmit={handleOnSubmit}>
        <h1>Login</h1>
        <input
          required
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          type="text"
          placeholder="Enter Username"
        />
        <br />
        <br />
        <input
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Enter Password"
        />
        <br />
        <br />
        <input id="submit" type="submit" value={"Submit"} />
      </form>
    </div>
  );
};

export default Login;
