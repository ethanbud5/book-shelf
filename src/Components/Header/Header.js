import React from "react";
import {Link} from "react-router-dom";
import "./Header.css"

function Header(props){

    return(
        <div>
            <header>
                <h1>MyBooks</h1>
                <Link to="/">Currently Reading</Link>
                <Link to="/to_read">To Read</Link>
                <Link to="/already_read">Already Read</Link>
            </header>
        </div>
    )
}

export default Header;