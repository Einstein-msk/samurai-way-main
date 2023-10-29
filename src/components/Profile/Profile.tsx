import React from 'react';
import './Profile.module.css';
import s from './Profile.module.css'
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostDataType, profilePageStateType, StateType, StoreType} from "../../Redux/store";
import MyPostsContainer from "./Myposts/MyPostsContainer";


// export type ArrOfPostData = PostDataType[]
// export type PostDataType = {
//     id: number
//     post: string
//     likeCount: number
// }

type ProfilePropsType = {
    // dispatch:any
    // addPost:()=>void
    // profilePageState: profilePageStateType
    // updateNewPostText:(newText:string)=>void
    // store:any
}
const Profile = (props:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>

    );
};

export default Profile;