import React from 'react';
import {
    addMessageCreator,
    updateNewMessageTextCreator
} from "../../Redux/messages-reducer";

import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";



const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {
            (store)=>{
                let state = store.getState().messagesPageState
                const addMessage = () => {
                    store.dispatch(addMessageCreator());
                }
                const onChangeHandlerTextArea = (text:string) => {
                   store.dispatch(updateNewMessageTextCreator(text))
                }
                return  <Dialogs addMessage={addMessage} updateNewMessageText={onChangeHandlerTextArea} messagesPageState={state} />
            }
        }

    </StoreContext.Consumer>;
};

export default DialogsContainer;