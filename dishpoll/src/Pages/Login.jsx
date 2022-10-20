import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postUserData } from "../Redux/AuthReducer/action";
import { POST_DATA_SUCCESS } from "../Redux/AuthReducer/actionType";

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
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          type="text"
          placeholder="Enter Username"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Enter Password"
        />
        <input type="submit" value={"Submit"} />
      </form>
    </div>
  );
};

export default Login;
