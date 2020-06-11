import React from 'react';
import Mypost from "./Mypost/Mypost";
import Infoprof from "./ProfileInfo/Infoprof";
import classes from './Profile.module.css';


const Profile = (props) => {



    return (

        <div className={classes.prof}>
            main content
            <Infoprof />
            <div>ava + description</div>
           <Mypost data={props.state.postData} addPost={props.addPost} />
        </div>
    )
};

export default Profile;