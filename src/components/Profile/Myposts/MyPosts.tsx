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
            <Post post={"Hey how are you?"}/>
            <Post post={"Now I'm on Seychelles"}/>
            <Post post={"F...ck!!! I forgot to by my Whiskas "}/>
            <Post post={"The weather is fantastic!!!"}/>

        </div>

    );
};

export default MyPosts;