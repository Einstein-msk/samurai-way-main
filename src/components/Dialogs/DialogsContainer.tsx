import React, {ChangeEvent, useRef} from 'react';
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItems from "./DialogItems/DialogsItems";
import {
    addMessageCreator,
    updateNewMessageTextCreator
} from "../../Redux/messages-reducer";
import {messagesPageStateType} from "../../Redux/store";
import Dialogs from "./Dialogs";


export type  DialogsPropsType = {
    store:any
}
const DialogsContainer = (props: DialogsPropsType) => {
    let state = props.store.getState().messagesPageState
    const addMessage = () => {
        props.store.dispatch(addMessageCreator());
    }
    const onChangeHandlerTextArea = (text:string) => {
        props.store.dispatch(updateNewMessageTextCreator(text))
    }
    return <Dialogs addMessage={addMessage} updateNewMessageText={onChangeHandlerTextArea} messagesPageState={state} />;
};

export default DialogsContainer;