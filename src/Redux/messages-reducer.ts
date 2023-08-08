import {ActionType} from "./profile-reducer";


const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const ADD_MESSAGE= "ADD-MESSAGE"
 const messagesReducer = (state:any, action:ActionType)=> {
     switch (action.type) {
         case ADD_MESSAGE:
             let newMessage = {id: 6, message: state.newMessageText};
             state.messagesData.push(newMessage);
             state.newMessageText = "";
            return state
         case UPDATE_NEW_MESSAGE_TEXT:
             state.newMessageText = action.newText;
             return state
         default:
             return state
     }
}

export const addMessageCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextCreator = (text: string | undefined) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
})

export default messagesReducer;