import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import { useContext,useEffect } from "react";

const NavBar = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/api/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4000/api/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
    console.log("User Logout");
  }
  const email = userInfo?.email;
  return (
    <div className="navcont">
      <nav>
        <li>
          <Link id="l1" to={"/home"}>
            Home
          </Link>
        </li>
        <li>
          <Link id="l2" to={"/addnote"}>
            AddNote
          </Link>
        </li>
        <li>
          <Link id="l3" to={"/deleteAll"}>
            DeleteAll
          </Link>
        </li>
        <li>
        <Link id="l4" onClick={logout} to={"/"}>
            {email} Logout
          </Link>
        </li>
      </nav>
    </div>
  );
};

export default NavBar;
