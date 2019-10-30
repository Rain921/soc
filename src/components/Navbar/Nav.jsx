import React from 'react';
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={classes.app_nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to="/dialogs" activeClassName={classes.activeLink}>Messeages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="#">music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="#">news</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/settings" activeClassName={classes.activeLink}>setings</NavLink>
            </div>
        </nav>

    );
};

export default Nav;