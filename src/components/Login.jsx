import React from "react";
import "./SignUp.css";
import { useState } from "react";
import { Navigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [navigate, setNavigate] = useState(false);

    const login = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:4000/api/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
          });
         if(response.ok){
            setNavigate(true);
         }else{
            alert("Invalid credentials");
         }
    }

    if(navigate){
       return(
        <Navigate  to={"/home"} />
       )
    }

  return (
    <div className="signcont">
      <div className="formcont">
        <form onSubmit={login}>
          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Login</button>
        </form>
        <h4>
          New here..<Link to={"/signup"}>Click here</Link>
        </h4>
      </div>
    </div>
  );
};

export default Login;
