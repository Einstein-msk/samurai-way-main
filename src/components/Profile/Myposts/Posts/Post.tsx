import React from 'react';

import s from './Post.module.css'

type PostPropsType = {
    post: string
}

const Post = (props:PostPropsType) => {
    return (

        <div className={s.item}>
            <img
                src='https://avatars.dzeninfra.ru/get-zen_doc/1878023/pub_5db1bce8c7e50c00b1298559_5db1bd21433ecc00b056bd03/scale_1200'/>
            {props.post}
            <div>
                like
            </div>
        </div>


    );
};

export default Post;