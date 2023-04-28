import React from 'react';
import './Profile.module.css';
import s from './Profile.module.css'

const Profile = () => {
    return (

            <div className={s.posts}>
                <img width="1000px" height="300px"
                     src="https://media.audleytravel.com/-/media/images/home/africa/seychelles/letterbox-images/istock-new/la_digue_seychelles_beach_1212741428_3000x1000.webp?q=79&w=1920&h=640"
                     alt="main content img sakura "/>


                <div className={s.content}>ava+description</div>
                <div className={s.content}>
                    my post
                    <div>
                        New Post
                    </div>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>

    );
};

export default Profile;