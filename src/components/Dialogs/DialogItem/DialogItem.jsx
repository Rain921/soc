import React from 'react';
import classes from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={ classes.dialogss + ' ' + classes.actives }>
            <NavLink to={path} activeClassName={classes.activeLink2}>{props.name}
                <img src="https://img.icons8.com/android/2x/bookmark.png" alt=""/>
            </NavLink>
        </div>
    )

};


export default DialogItem;