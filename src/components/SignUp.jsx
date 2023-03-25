import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { Validation } from "simple-validator-js";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

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

  function checked(){
    setIsChecked(!isChecked);
  }

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
          <input
            type="password"
            placeholder="Confirm Password"
            value={cpassword}
            onChange={(e) => {
              let cpd = e.target.value;
              setCPassword(cpd);
              let ValidationInfo = new Validation(cpd).passwordConfirmation(
                password
              );
              if (ValidationInfo.result.isValid === false) {
                alert("Passwords don't match");
              }
            }}
          />
          <div id="tc">
            <input type="checkbox" onClick={checked} />
            <h3>I agree With T&C</h3>
          </div>
          <button className={isChecked ? "checked" : "unchecked"}>SignUp</button>
        </form>
        <h4>
          Already have account??<Link to={"/"}>Click here</Link>
        </h4>
      </div>
    </div>
  );
};

export default SignUp;
