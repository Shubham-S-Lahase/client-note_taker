import React, { useEffect } from "react";
import "./Home.css";
import Navbar from "./Navbar";
import { UserContext } from "../UserContext";
import { useContext } from "react";

const Home = () => {
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

  const email = userInfo?.email;

  return (
    <div>
      {email && (
        <>
          <div className="homecont">
            <Navbar />
            
          </div>
        </>
      )}
      {!email && (
        <>
            <p>You need to login..Session expired</p>
        </>
      )
      }
    </div>
  );
};

export default Home;
