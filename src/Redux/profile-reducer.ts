import {PostDataType, profilePageStateType} from "./store";

// export type ActionType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof updateNewPostTextActionCreator>
export type ActionType = {
    type:string
    newText?: string
}

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    postData: [
        {id: 1, post: "Hey how are you?!", likeCount: 17},
        {id: 2, post: "Now I'm on Seychelles!", likeCount: 35},
        {id: 4, post: "The weather is fantastic!!!!", likeCount: 34},

    ],
    newPostText: "it-kamasutra.com"

}

const profileReducer = (state: any = initialState, action: ActionType) => {

    switch (action.type) {
        case ADD_POST:
            let newPost: PostDataType = {id: 5, post: state.newPostText, likeCount: 0};
            state.postData.push(newPost);
            state.newPostText = "";
            break;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            break;
    }

    return state
}

export const addPostActionCreator = () => {
    return {type: ADD_POST}
}

//воспринимай как константу то есть в типизации тип должен быть четко  ADD_POST
export const updateNewPostTextActionCreator = (text: string | undefined) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}
export default profileReducer;


