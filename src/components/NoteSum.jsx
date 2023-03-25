import React from "react";
import "./NoteSum.css";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const Note = (_id, title, description, createdAt) => {
    return(
        <div className="notesumcont">
           <Link  to={'/note/${_id}'}>
           <div>
            <p><time>{format(new Date(createdAt), "MMM d, yyyy HH:mm")}</time></p>
            </div>
            <div>
                <h3>{title}</h3>
            </div>
            <div>
                <p>{description.slice(0,20)}</p>
            </div>
           </Link>
        </div>
    )
} 

export default Note;
