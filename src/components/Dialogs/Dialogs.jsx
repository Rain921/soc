import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_item}>
                <div className={classes.dialog}>
                    name Dimich
                </div>
                <div className={classes.dialog}>
                    name Andreri
                </div>
                <div className={classes.dialog}>
                    name 3
                </div>
                <div className={classes.dialog}>
                    name 4
                </div>
                <div className={classes.dialog}>
                    name 5
                </div>
                <div className={classes.dialog}>
                    name 6
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.messages}>
                    hi

                </div>
                <div className={classes.messages}>
                    how you

                </div>
                <div className={classes.messages}>

                </div>

            </div>

            Dialogs
        </div>

    )

};

export default Dialogs;