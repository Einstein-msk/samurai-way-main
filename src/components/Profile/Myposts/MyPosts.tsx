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
            </div>
            <Post post={"Hey how are you?"} likeCount={15}/>
            <Post post={"Now I'm on Seychelles"} likeCount={35}/>
            <Post post={"F...ck!!! I forgot to by my Whiskas "} likeCount={28}/>
            <Post post={"The weather is fantastic!!!"} likeCount={12}/>

        </div>

    );
};

export default MyPosts;