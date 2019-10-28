import React from 'react';
import classes from './Profile.module.css';
import Mypost from "./Mypost/Mypost";

const Profile = () => {
    return (
        <div className={classes.app_content}>
            main content
            <div>
                <img
                    src="https://cdn.img.com/joyent.wme/public/wme/assets/ec050984-7b81-11e6-96e0-8905cd656caf.jpg?v=13"
                    alt=""/>
            </div>
            <div>ava + description</div>
           <Mypost />
        </div>
    )
};

export default Profile;