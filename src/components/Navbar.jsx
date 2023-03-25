import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
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
            </nav>
        </div>
    )
};

export default NavBar;