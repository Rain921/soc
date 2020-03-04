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
    let dialosData = [
        {id:1,name: 'Dimich'},
        {id:2,name: 'gjgjghjg'},
        {id:3,name: 'ghjghjghj'},
        {id:4,name: 'gjjghjg'},
        {id:5,name: 'jkghghkjg'},
        {id:6,name: 'Dimich'}
        ]

    let messagesData = [
        {id:1,message: 'hi'},
        {id:2,message: 'how you?'},
        {id:3,message: 'ghjghjghj'},
        {id:4,message: 'gjjghjg'},
        {id:5,message: 'jkghghkjg'},
        {id:6,message: 'hfhgfhgfhg'}
    ]


    return (
        <div className={ classes.dialogs }>
            <div className={ classes.dialogs_item }>
               <DialogItem name={dialosData[0].name} id={dialosData[0].id} />
                <DialogItem name={dialosData[1].name} id={dialosData[1].id} />
                <DialogItem name={dialosData[2].name} id={dialosData[2].id} />
                <DialogItem name={dialosData[3].name} id={dialosData[3].id} />
                <DialogItem name={dialosData[4].name} id={dialosData[4].id} />
                <DialogItem name={dialosData[5].name} id={dialosData[5].id} />

            </div>
            <div className={ classes.messages }>
              <Messages name={messagesData[0].message} id={messagesData[0].id} />
                <Messages name={messagesData[1].message} id={messagesData[1].id} />
                <Messages name={messagesData[2].message} id={messagesData[2].id} />

            </div>


        </div>

    )

};

export default Dialogs;