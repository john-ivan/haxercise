import React from 'react';
import {Link, NavLink} from 'react-router-dom';

function Nav (){    
    return (
        <ul>
            <li>
                <NavLink exact to="/"> Home </NavLink>&nbsp;
                <NavLink to="/progress"> Progress </NavLink>&nbsp;                
                <NavLink to="/Test"> Test </NavLink>&nbsp;   
            </li>
        </ul>
    )
}

module.exports = Nav;