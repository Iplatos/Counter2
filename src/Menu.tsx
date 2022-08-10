import React from 'react';
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <NavLink to={"/Counter1"} >Counter#1</NavLink>
            <NavLink to={"/Counter2"} >Counter#2</NavLink>
        </div>
    );
};

export default Menu;