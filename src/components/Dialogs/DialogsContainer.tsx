import React from 'react';
import {
    addMessageCreator,
    updateNewMessageTextCreator
} from "../../Redux/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import store, {AppRootStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";



// const DialogsContainer = () => {
//
//     return <StoreContext.Consumer>
//         {
//             (store)=>{
//                 let state = store.getState().messagesPageState
//                 const addMessage = () => {
//                     store.dispatch(addMessageCreator());
//                 }
//                 const onChangeHandlerTextArea = (text:string) => {
//                    store.dispatch(updateNewMessageTextCreator(text))
//                 }
//                 return  <Dialogs addMessage={addMessage} updateNewMessageText={onChangeHandlerTextArea} messagesPageState={state} />
//             }
//         }
//
//     </StoreContext.Consumer>;
// };
let mapStateToProps = (state:AppRootStateType)=> {
    return {
        messagesPageState: state.messagesPageState
    }
}

let mapDispatchToProps = (dispatch:Dispatch)=> {
    return {
        updateNewMessageText:(text:string)=>{
            dispatch(updateNewMessageTextCreator(text))
        },
        addMessage:()=>{
            dispatch(addMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);
export default DialogsContainer;