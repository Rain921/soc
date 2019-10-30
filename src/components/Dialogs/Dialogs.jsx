import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {

    return (
        <div className={ classes.dialogs }>
            <div className={ classes.dialogs_item }>
                <div className={ classes.dialog + ' ' + classes.active }>
                    <NavLink to="/dialogs/1">name Dimich</NavLink>
                </div>
                <div className={ classes.dialog }>
                    name Andreri
                </div>
                <div className={ classes.dialog }>
                    name 3
                </div>
                <div className={ classes.dialog }>
                    name 4
                </div>
                <div className={ classes.dialog }>
                    name 5
                </div>
                <div className={ classes.dialog }>
                    name 6
                </div>
            </div>
            <div className={ classes.messages }>
                <div className={ classes.message }>
                    hi

                </div>
                <div className={ classes.message }>
                    how you

                </div>
                <div className={ classes.message }>

                </div>

            </div>


        </div>

    )

};

export default Dialogs;