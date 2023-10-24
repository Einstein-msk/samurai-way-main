import {ActionType} from "./profile-reducer";


const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const ADD_MESSAGE= "ADD-MESSAGE"

let initialState ={
    dialogData: [
        {id: 1, name: "Zhenya"},
        {id: 2, name: "Bogdan"},
        {id: 3, name: "Egor"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Alexey"}
    ],
    messagesData: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "What are you doing today?"},
        {id: 4, message: "What are you doing today?"},
        {id: 5, message: "What are you doing today?"}
    ],
    newMessageText: "Default message text"
}
 const messagesReducer = (state:any =initialState, action:ActionType)=> {
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