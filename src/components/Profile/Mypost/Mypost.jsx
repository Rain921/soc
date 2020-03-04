import React from 'react';
import classes from './Mypost.module.css';
import Post from "./Post/Post";

const Mypost = () => {
    let postData = [
        {id:1,message: 'hi ,how are you?', likecounts:34},
        {id:2,message: 'it ,my firs post', likecounts:23 }
    ]

    return (
        <div>
            my post
            <div>
                <textarea name="post" id="" cols="30" rows="10">
                </textarea>
                <button>add post</button>
            </div>
            <div className={ classes.posts }>
                <Post message={postData[0].message}  likescount={postData[0].likecounts} />
                <Post message={postData[1].message}  likescount={postData[1].likecounts} />
            </div>
        </div>
    )
};

export default Mypost;