import React  from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeContext";
import {StoreType} from "../../../Redux/store";

const MyPostsContainer = () => {
    return <StoreContext.Consumer >
        {/*внутри консьюмера первая фигурная скобка должна быть с НОВОЙ СТРОКИ, иначе выйдет ошибка
        TS2746: This JSX tag's 'children' prop expects a single child of type '(value: StoreType) =>
         ReactNode', but multiple children were provided.*/}
        {
            (store:StoreType)=> {
                let state = store.getState().profilePageState
                const addPost = () => store.dispatch(addPostActionCreator());
                const onPostChange = (text:string|undefined) => {
                    let action = updateNewPostTextActionCreator(text)
                    store.dispatch(action)
                }
                return <div>
                    <MyPosts postData={state.postData}
                    addPost={addPost} updateNewPostText={onPostChange}
                    newPostText={state.newPostText}/>
                </div>
            }
        }
           </StoreContext.Consumer>
};

export default MyPostsContainer;