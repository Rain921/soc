import React from 'react';
import classes from './Mypost.module.css';
import Post from "./Post/Post";

const Mypost = () => {
    return (
        <div>
            my post
            <div>
                <textarea name="post" id="" cols="30" rows="10">
                </textarea>
                <button>add post</button>
            </div>
            <div className={ classes.posts }>
                <Post message="hi ,how are you?"/>
                <Post message="it ,my firs post"/>
            </div>
        </div>
    )
};

export default Mypost;