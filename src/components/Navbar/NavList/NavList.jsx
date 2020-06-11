import React from 'react';
import classes from '../Nav.module.css';
import {NavLink} from "react-router-dom";



const NavList = (props) => {


    return (
        <div className={classes.item}>
            <NavLink to={`/${props.id}`} activeClassName={classes.activeLink}>{props.menu}</NavLink>
        </div>

    );
};

export default NavList;