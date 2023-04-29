import React from 'react';

import s from './MyPosts.module.css'
import Post from "./Posts/Post";

const MyPosts = () => {
    return (

           <div>
               My posts
            <div>
                <textarea placeholder="write your post, bro!"></textarea>
                <button>Add post</button>
                <button>Remove post</button>
            </div>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>

    );
};

export default MyPosts;