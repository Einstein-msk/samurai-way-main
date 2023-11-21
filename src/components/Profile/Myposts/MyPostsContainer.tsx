import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import store, {AppRootStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";
import {PostDataType} from "../../../Redux/store";

// const MyPostsContainer = () => {
//     return <StoreContext.Consumer>
//         {/*внутри консьюмера первая фигурная скобка должна быть с НОВОЙ СТРОКИ, иначе выйдет ошибка
//         TS2746: This JSX tag's 'children' prop expects a single child of type '(value: StoreType) =>
//          ReactNode', but multiple children were provided.*/}
//         {
//             (store: StoreType) => {
//                 let state = store.getState().profilePageState
//                 const addPost = () => store.dispatch(addPostActionCreator());
//                 const onPostChange = (text: string | undefined) => {
//                     let action = updateNewPostTextActionCreator(text)
//                     store.dispatch(action)
//                 }
//                 return <div>
//                     <MyPosts postData={state.postData}
//                              addPost={addPost} updateNewPostText={onPostChange}
//                              newPostText={state.newPostText}/>
//                 </div>
//             }
//         }
//     </StoreContext.Consumer>
// };


type MapStateToPropsType = {
    postData: PostDataType[]
    newPostText: string
}
let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {

    return {
        postData: state.profilePageState.postData,
        newPostText: state.profilePageState.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {

    return {
        updateNewPostText: (text: string | undefined) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

