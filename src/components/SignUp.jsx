import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("Registration Successfull");
      navigate("/");
    } else {
      alert("Registration failed");
    }
  };

  return (
    <div className="signcont">
      <div className="formcont">
        <form onSubmit={signup}>
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
          <input type="password" placeholder="Confirm Password" />
          <button>SignUp</button>
        </form>
        <h4>
          Already have account??<Link to={"/"}>Click here</Link>
        </h4>
      </div>
    </div>
  );
};

export default SignUp;
