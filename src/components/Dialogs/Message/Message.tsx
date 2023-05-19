import React, {useRef} from 'react';
import s from "./../Dialogs.module.css"





type MessagesPropsType = {
    message: string
}
const Message = (props: MessagesPropsType) => {
    return (
        <div className={s.dialog}>
            <div className={s.dialog}>{props.message}</div>

        </div>


    )
}




export default Message;