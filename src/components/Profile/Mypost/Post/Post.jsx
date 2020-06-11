import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {

    console.log(props.message);
    return (
        <div>
            <div className={ classes.item }>
                <img src="https://www.kinonews.ru/insimgs/2019/newsimg/newsimg87089.jpg" alt=""/>
                {props.message }
                <div>
                    <span>like</span> { props.likescount }
                </div>
            </div>
        </div>
    )
};

export default Post;