import {renderEntireTree} from "../render";

export type profilePageStateType = {
    postData: PostDataType[]
    newPostText:string
}

export type messagesPageStateType = {
    dialogData: Array<DialogDataType>
    messagesData: MessagesType[]
    newMessageText:string
}

export type StateType = {
    profilePageState: {
        postData: PostDataType[]
        newPostText:string
    }
    messagesPageState: {
        dialogData: Array<DialogDataType>
        messagesData: MessagesType[]
        newMessageText:string
    }
}

export type PostDataType = {
    id: number
    post: string
    likeCount: number
}

export type MessagesType = {
    id: number
    message: string
}

export type DialogDataType = {
    id: number
    name: string
};

let state = {
    profilePageState: {
        postData: [
            {id: 1, post: "Hey how are you?!", likeCount: 17},
            {id: 2, post: "Now I'm on Seychelles!", likeCount: 35},
            {id: 4, post: "The weather is fantastic!!!!", likeCount: 34},

        ],
        newPostText: "it-kamasutra.com"
    },
    messagesPageState: {
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

}

export const addPost = () => {
    let newPost: PostDataType = {id: 5, post: state.profilePageState.newPostText, likeCount: 0};
    state.profilePageState.postData.push(newPost);
    state.profilePageState.newPostText="";
    renderEntireTree(state);

}
export let updateNewPostText = (newText:string)=> {
    state.profilePageState.newPostText=newText;
    renderEntireTree(state);
}
export let updateNewMessageText = (newText:string)=> {
    state.messagesPageState.newMessageText=newText;
    renderEntireTree(state);
}

export const addMessage = ()=> {
    let newMessage = {id:6, message:state.messagesPageState.newMessageText};
    state.messagesPageState.messagesData.push(newMessage);
    state.messagesPageState.newMessageText="";
    renderEntireTree(state);
}
export default state;












