import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    navigate("/pollData", { replace: true });
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input type="text" placeholder="Enter Username" />
        <input type="password" placeholder="Enter Password" />
        <input type="submit" value={"Submit"} />
      </form>
    </div>
  );
};

export default Login;
