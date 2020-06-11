import React from 'react';
import classes from './Mypost.module.css';
import Post from "./Post/Post";

const Mypost = (props) => {

    let newPostElement = React.createRef(); // создается ссылка реакта аналог id из верстки

    let postElement = props.data.map(post => <Post message={post.message}  likescount={post.likecounts} />)
    let addPost = () => {
       let text = newPostElement.current.value;
        props.addPost(text); //перекинули пропс с bll в ui и вызвали внутри value из textarea
        newPostElement.current.value = "";
    };


// (/*колбек функция*/) => { alert('ghfghfgh') /*вызов функции*/}

//colback function on button
    return (
        <div>
            my post
            <div>
                <textarea ref={newPostElement} id="newPost" >
                </textarea>

                <button onClick={addPost}>add post</button>
            </div>
            <div className={ classes.posts }>
                {postElement}
            </div>
        </div>
    )
};

export default Mypost;