import React from 'react';
import './Profile.module.css';
import s from './Profile.module.css'
import MyPosts from "./Myposts/MyPosts";

const Profile = () => {
    return (

            <div>
                <div>
                    <img width="1000px" height="300px"
                         src="https://media.audleytravel.com/-/media/images/home/africa/seychelles/letterbox-images/istock-new/la_digue_seychelles_beach_1212741428_3000x1000.webp?q=79&w=1920&h=640"
                         alt="main content img sakura "/>
                </div>
                <div>ava+description</div>

                <MyPosts />



            </div>

    );
};

export default Profile;