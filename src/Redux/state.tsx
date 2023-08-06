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

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
        }

    },
    // _callSubscriber становится методом, а не стрелочной функцией обьекта и у него меняется синтаксис убирается знак равно и стрелка
    _callSubscriber(arg: any) {
        console.log("state changed")
    },

    getState() {
        debugger
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;  //observer(переводится как наблюдатель) , pattern
    },


    dispatch(action: any) { // action это обьект в котором будет указано что нужно совершить у этого обьекта должно быть св-во type {type: "ADD-POST"}
        if (action.type === "ADD-POST") {
            let newPost:PostDataType = {id: 5, post: this._state.profilePageState.newPostText, likeCount: 0};
            this._state.profilePageState.postData.push(newPost);
            this._state.profilePageState.newPostText = "";
            this._callSubscriber(this._state)

        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePageState.newPostText = action.newText;
                this._callSubscriber(this._state);
        } else if (action.type==="ADD-MESSAGE") {
            let newMessage = {id: 6, message: this._state.messagesPageState.newMessageText};
            this._state.messagesPageState.messagesData.push(newMessage);
            this._state.messagesPageState.newMessageText = "";
            this._callSubscriber(this._state);
        } else if (action.type==="UPDATE-NEW-MESSAGE-TEXT") {
            this._state.messagesPageState.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }

}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text:string| undefined) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default store;
// window.store=store












