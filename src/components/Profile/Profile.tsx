import React from 'react';
import './Profile.module.css';
import s from './Profile.module.css'
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostDataType, profilePageStateType, StateType} from "../../Redux/state";


// export type ArrOfPostData = PostDataType[]
// export type PostDataType = {
//     id: number
//     post: string
//     likeCount: number
// }

type ProfilePropsType = {
    dispatch:any
    // addPost:()=>void
    profilePageState: profilePageStateType
    // updateNewPostText:(newText:string)=>void
}
const Profile = (props:ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.profilePageState.postData}
                     newPostText={props.profilePageState.newPostText}
                     dispatch={props.dispatch}

            />
        </div>

    );
};

export default Profile;