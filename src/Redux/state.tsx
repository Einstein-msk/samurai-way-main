import profileReducer, {ActionType} from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";
import {addPostActionCreator} from "./profile-reducer";
import {updateNewPostTextActionCreator} from "./profile-reducer";
import {updateNewMessageTextCreator} from "./messages-reducer";
import {addMessageCreator} from "./messages-reducer";

export type profilePageStateType = {
    postData: PostDataType[]
    newPostText: string
}

export type messagesPageStateType = {
    dialogData: Array<DialogDataType>
    messagesData: MessagesType[]
    newMessageText: string
}

export type StateType = {
    profilePageState: {
        postData: PostDataType[]
        newPostText: string
    }
    messagesPageState: {
        dialogData: Array<DialogDataType>
        messagesData: MessagesType[]
        newMessageText: string
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


let store = {
    //нижнее подчеркивание означает что ключ приватный (к нему можно обратиться, но это договоренность что напрямую нельзя считывать его значения)
    _state: {
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
        },
        sidebar: {}

    },
    // _callSubscriber становится методом, а не стрелочной функцией обьекта и у него меняется синтаксис убирается знак равно и стрелка
    _callSubscriber(arg: any) {
        console.log("state changed")
    },

    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;  //observer(переводится как наблюдатель) , pattern
    },


    dispatch(action: ActionType) { // action это обьект в котором будет указано что нужно совершить у этого обьекта должно быть св-во type {type: "ADD-POST"}
        this._state.profilePageState = profileReducer(this._state.profilePageState, action);
        this._state.messagesPageState = messagesReducer(this._state.messagesPageState, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state)
    }
}
export default store;
// window.store=store
// reducer-это чистая функция которая принимает стейт, принимает action(обьект у которого есть, как минимум ключ type), action применяет к этому стейту и возвращает ноавый стейт











