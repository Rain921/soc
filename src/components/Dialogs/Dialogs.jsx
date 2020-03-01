import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={ classes.dialogss + ' ' + classes.actives }>
            <NavLink to={path} activeClassName={classes.activeLink2}>{props.name}</NavLink>
        </div>
    )

};
const Messages = (props) => {
    return (
        <div className={ classes.message }>
            {props.name}
        </div>

    )

};

const Dialogs = (props) => {


    return (
        <div className={ classes.dialogs }>
            <div className={ classes.dialogs_item }>
               <DialogItem name="name Dimich" id="1" />
                <DialogItem name="name agfdfg" id="2" />
                <DialogItem name="name jhjgj" id="3" />
                <DialogItem name="name ghjgjgjh" id="4" />
                <DialogItem name="name sdfsdfs" id="5" />
                <DialogItem name="name khjkhjk" id="6" />

            </div>
            <div className={ classes.messages }>
              <Messages name="hi"/>
                <Messages name="how you?"/>
                <Messages name="jghjghjghjghj"/>



            </div>


        </div>

    )

};

export default Dialogs;