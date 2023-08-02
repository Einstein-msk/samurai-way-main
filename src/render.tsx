import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {addMessage, addPost, StateType, updateNewMessageText, updateNewPostText} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";

export let renderEntireTree= (state:StateType)=> {
    ReactDOM.render(
        // компонента BrowserRouter нужна для того чтобы использовать систему роутинга (компонента Route). Эта компонента BrowserRouter
        // должна обрамлять всю JSX разметку в App. Сама компонента BrowserRouter импортируется из react-router-dom
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}
                 updateNewMessageText={updateNewMessageText} addMessage={addMessage} />
        </BrowserRouter> ,
        document.getElementById('root')
    );
}


