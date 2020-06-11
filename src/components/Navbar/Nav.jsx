import React from 'react';
import classes from './Nav.module.css';
import Friends from "./Friends/Friends";
import NavList from "./NavList/NavList";




const Nav = (props) => {
    let NavListElement = props.state.sideMenu
        .map(navList => <NavList menu={navList.menu} id={navList.id}/>);



    return (
        <div className={classes.app_sidebar}>
        <nav className={classes.app_nav}>
            {NavListElement}
        </nav>
            <Friends state={props.state.friendsData}/>
        </div>

    );
};

export default Nav;