import React, {ChangeEvent, ChangeEventHandler, RefObject} from 'react';
import s from './MyPosts.module.css'
import Post from "./Posts/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import {PostDataType} from "../../../Redux/store";



type MyPostsPropsType = {
    postData: PostDataType[]
    addPost: ()=>void
    newPostText: string
    updateNewPostText:(text:string|undefined)=>void

}
const MyPosts = (props: MyPostsPropsType) => {

    console.log('props', props)



    let mappedPostData = props.postData.map(p => <Post key={p.id} post={p.post} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    const onAddPost = () => {
        props.addPost()
    }
    const onPostChange = () => {
        //проверяем здесь чтоб newPostElement.current не был null если не проверить typeScript, будет ругаться
        // if (newPostElement.current!==null) {
        //     let text= newPostElement.current.value
        //     let action = {type: "UPDATE-NEW-POST-TEXT", newText: text};
        //     props.dispatch(action);
        // }
        //
        //2й вариант записи:
        let text = newPostElement.current?.value; // знак вопроса то же самое вместо if
        props.updateNewPostText(text)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>

                <div>
                    <button onClick={onAddPost}>Add post</button>
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