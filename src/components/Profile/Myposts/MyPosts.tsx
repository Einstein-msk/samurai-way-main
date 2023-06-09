import React, {RefObject} from 'react';
import s from './MyPosts.module.css'
import Post from "./Posts/Post";
import {PostDataType} from "../../../Redux/state";





type MyPostsPropsType = {
    postData:PostDataType[]
}
const MyPosts = (props:MyPostsPropsType) => {
    let mappedPostData=props.postData.map(p=><Post post={p.post} likeCount={p.likeCount}/>)

    let newPostElement:any= React.createRef()
    const addPost =()=> {
        let text = newPostElement.current.value
        alert(text)
    }
    return (
        <div className={s.postsBlock}>
           <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} ></textarea>
                </div>

                <div>
                    <button onClick={addPost}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {mappedPostData}
                {/*Вместо захардкоженных компонент Post, теперь они отображаются с помощью переменной mappedPostData*/}
                {/*<Post post={postData[0].post} likeCount={postData[0].likeCount}/>*/}
                {/*<Post post={postData[1].post} likeCount={postData[1].likeCount}/>*/}
                {/*<Post post={postData[2].post} likeCount={postData[2].likeCount}/>*/}
                {/*<Post post={postData[3].post} likeCount={postData[3].likeCount}/>*/}
            </div>
        </div>

    );
};

export default MyPosts;