import React from 'react';
import classes from '../Dialogs.module.css';


const Message = (props) => {
    return (
        <div className={ classes.message }>
            {props.name}
            <img src="https://img.icons8.com/android/2x/refresh.png" alt=""/>
        </div>

    )

};

export default Message;