import React  from 'react'
import { NavLink } from "react-router-dom";

import '../css/index.css'

const Nav = () => {

    return(
        <nav className="nav">
            <NavLink exact to="/R2">R2</NavLink>
            <NavLink exact to="/R3">R3</NavLink>
            <NavLink exact to="/R4">R4</NavLink>
        </nav>
    );
}
export default Nav