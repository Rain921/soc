import React from 'react';
import classes from './Profile.module.css';
import Mypost from "./Mypost/Mypost";

const Profile = () => {
    return (
        <div>
            main content
            <div>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/1859-Martinique.web.jpg"
                    alt=""/>
            </div>
            <div>ava + description</div>
           <Mypost />
        </div>
    )
};

export default Profile;