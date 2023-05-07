import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Posts/Post";


const MyPosts = () => {

    return (

        <div className={s.postsBlock}>
           <h3>My posts</h3>
            <div>
                <div>
                    <textarea placeholder="write your post, bro!"></textarea>
                </div>

                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                <Post post={"Hey how are you?"} likeCount={15}/>
                <Post post={"Now I'm on Seychelles"} likeCount={35}/>
                <Post post={"F...ck!!! I forgot to by my Whiskas "} likeCount={28}/>
                <Post post={"The weather is fantastic!!!"} likeCount={12}/>
            </div>
        </div>

    );
};

export default MyPosts;