import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); 

  return (
    <div>
      <h2>Login Page</h2>
      <label>Username</label>
      <input type="text"/>
      <label>Password</label>
      <input type="password"/>
      <button onClick={() => navigate("/mainpage")}>Login</button> 
    </div>
  );
};

export default Login;
