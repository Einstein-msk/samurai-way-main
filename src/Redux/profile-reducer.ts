import {PostDataType} from "./state";

export type ActionType= {
    type: string
    newText?:string
}

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

 const profileReducer = (state:any, action: ActionType)=> {

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

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string | undefined) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export default profileReducer;