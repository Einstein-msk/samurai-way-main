import React, {useRef} from 'react';
import s from "./../Dialogs.module.css"





type MessagesPropsType = {
    message: string
}
const Message = (props: MessagesPropsType) => {
   const newMessageElement= useRef<HTMLTextAreaElement>(null)
    const addMessage = ()=> {
       if (newMessageElement.current!==null) {
           alert(newMessageElement.current.value)
       }
    }
    return (
        <div className={s.dialog}>
            <div className={s.dialog}>{props.message}</div>
            <textarea ref={newMessageElement}></textarea>
            <button onClick={addMessage}>Add Message</button>
        </div>


    )
}




export default Message;