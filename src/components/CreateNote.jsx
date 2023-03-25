import React, { useState } from "react";
import { Navigate, redirect } from "react-router-dom";
import "./CreateNote.css";
import NavBar from "./Navbar";

const CreateNote = () => {
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [navigate, setNavigate] = useState(false);

async function createNewNote(e){
    e.preventdefault();
    const response = await fetch("http://localhost:4000/api/note", {
        method: "POST",
        body: JSON.stringify({title, description}),
        headers: { "Content-Type": "application/json" },
    });
    if(response.ok){
        setNavigate(true)
    }
}

if(navigate){
    return <Navigate to={"/home"} />
}

    return(
        <>
        <NavBar/>
        <div className="newnotecont">
            <form onSubmit={createNewNote}>
                <div>Title</div>
                <div>
                <input type="text" id="tt" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>Description</div>
                <div>
                <input type="text" id="dsc" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div>
                    <button>Add Note</button>
                </div>
            </form>
        </div>
        </>
    )
};

export default CreateNote;