import React, {ChangeEvent, useRef} from 'react';
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItems from "./DialogItems/DialogsItems";
import {
    addMessageCreator,
    updateNewMessageTextCreator
} from "../../Redux/messages-reducer";
import {text} from "stream/consumers";
import {messagesPageStateType} from "../../Redux/state";


export type  DialogsPropsType = {
    messagesPageState: messagesPageStateType
    // updateNewMessageText:(newText:string)=>void
    // addMessage:()=>void
    dispatch: any
}
const Dialogs = (props: DialogsPropsType) => {
    const newMessageElement = useRef<HTMLTextAreaElement>(null)
    const addMessage = () => {
        props.dispatch(addMessageCreator());
    }
    let mappedDialogData = props.messagesPageState.dialogData.map(d => <DialogItems name={d.name} id={d.id}/>)
    let mappedMessagesData = props.messagesPageState.messagesData.map(m => <Message message={m.message}/>)
    const onChangeHandlerTextArea = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        // let text = newMessageElement.current?.value
        props.dispatch(updateNewMessageTextCreator(text))

    }
    return (
        // делаеем страницу Messages. Она будет состоять из двух div. Первая будет - s.dialogs,  а вторая - s.messages.
        // Отобразим их в виде 2х колонок с помощью display: grid в Dialogs.module.css.
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {mappedDialogData}
                {/*Вместо захардкоженных компонент DialogItems, теперь они отображаются с помощью переменной mappedDialogData */}
                {/*<DialogItems name={dialogData[0].name} id={dialogData[0].id}/>*/}
                {/*<DialogItems name={dialogData[1].name} id={dialogData[1].id}/>*/}
                {/*<DialogItems name={dialogData[2].name} id={dialogData[2].id}/>*/}
                {/*<DialogItems name={dialogData[3].name} id={dialogData[3].id}/>*/}
                {/*<DialogItems name={dialogData[4].name} id={dialogData[4].id}/>*/}
            </div>

            <div className={s.messages}>
                {mappedMessagesData}
                <textarea onChange={onChangeHandlerTextArea} value={props.messagesPageState.newMessageText}
                          ref={newMessageElement}></textarea>
                <button onClick={addMessage}>Add Message</button>
                {/*Вместо захардкоженных компонент Messages, теперь они отображаются с помощью переменной mappedMessagesData */}
                {/*<Messages message={messagesData[0].message}/>*/}
                {/*<Messages message={messagesData[1].message}/>*/}
                {/*<Messages message={messagesData[2].message}/>*/}
                {/*<Messages message={messagesData[3].message}/>*/}
                {/*<Messages message={messagesData[4].message}/>*/}

            </div>

        </div>
    );
};

export default Dialogs;