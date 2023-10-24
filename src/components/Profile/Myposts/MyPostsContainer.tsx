import React  from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";



type MyPostsContainerPropsType = {
    store:any

}
const MyPostsContainer = (props: MyPostsContainerPropsType) => {
    let state = props.store.getState().profilePageState
    const addPost = () => props.store.dispatch(addPostActionCreator());
    const onPostChange = (text:string|undefined) => {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }

    return (
       <MyPosts postData={state.postData}
                addPost={addPost} updateNewPostText={onPostChange}
                newPostText={state.newPostText}/>

    );
};

export default MyPostsContainer;