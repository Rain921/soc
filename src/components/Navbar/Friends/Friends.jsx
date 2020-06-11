import React from 'react';
import classes from './friends.module.css';
import FriendsList from "./FriendsList/FriendsList";


const Friends = (props) => {


    let FriendsElement = props.state.map(friends => <FriendsList name={friends.name} id={friends.id}/>);


    return (
            <div className={classes.friends}>
                <span>
                    Friends
                </span>
                <ul className={classes.friends_list}>
                    {FriendsElement}
                </ul>
            </div>

    );
};

export default Friends;