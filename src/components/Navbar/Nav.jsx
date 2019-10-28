import React from 'react';
import classes from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={classes.app_nav}>
            <div className={`${classes.item} ${classes.active}`}>
                <a href="#"> Profile</a>
            </div>
            <div className={classes.item}>
                <a href="#"> Messeages</a>
            </div>
            <div className={classes.item}>
                <a href="#"> music</a>
            </div>
            <div className={classes.item}>
                <a href="#"> news</a>
            </div>
        </nav>

    )
}

export default Nav;