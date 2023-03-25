import React, { useEffect } from "react";
import "./Home.css";
import Navbar from "./Navbar";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import Note from "./NoteSum";

const Home = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const {notes,setNotes} = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/api/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/api/note").then(response => {
      response.json().then(notes => {
        setNotes(notes);
        console.log(notes);
      });
    });
  }, [])

  const email = userInfo?.email;

  return (
    <div>
      {email && (
        <>
          <div className="homecont">
            <Navbar />
            <div className="srcbar">
              <input type="search" placeholder="search !" />
            </div>
            <div className="notsum">
                {/* {
                  notes.length >= 0 && notes.map(note => (
                    <Note key={note._id} {...note} />
                  ))
                } */}
            </div>
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
