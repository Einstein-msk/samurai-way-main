import React from 'react';
import './Profile.module.css';
import s from './Profile.module.css'
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ArrOfPostData} from "../../index";

// export type ArrOfPostData = PostDataType[]
// export type PostDataType = {
//     id: number
//     post: string
//     likeCount: number
// }

type ProfilePropsType = {
    appPostData: ArrOfPostData
}
const Profile = (props:ProfilePropsType) => {
    // let postData: ArrOfPostData = [
    //     {id:1, post: "Hey how are you?!", likeCount: 17},
    //     {id:2, post: "Now I'm on Seychelles!", likeCount: 35},
    //     {id:3, post: "F...ck!!! I forgot to by my Whiskas!", likeCount: 60},
    //     {id:4, post: "The weather is fantastic!!!!", likeCount: 34},
    //
    // ]
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postData={props.appPostData}/>
        </div>

    );
};

export default Profile;