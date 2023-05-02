import React from 'react';

import s from './Post.module.css'

type PostPropsType = {
    post: string
    likeCount: number
}

const Post = (props: PostPropsType) => {
    console.log(props)
    return (

        <div className={s.item}>
            <img
                src='https://avatars.dzeninfra.ru/get-zen_doc/1878023/pub_5db1bce8c7e50c00b1298559_5db1bd21433ecc00b056bd03/scale_1200'
                alt="avatar"/>
            {props.post}
            <div>
                likes {props.likeCount}
            </div>
        </div>


    );
};

export default Post;