import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store, {StateType} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";

export let renderEntireTree= (state:StateType)=> {
    ReactDOM.render(
        // компонента BrowserRouter нужна для того чтобы использовать систему роутинга (компонента Route). Эта компонента BrowserRouter
        // должна обрамлять всю JSX разметку в App. Сама компонента BrowserRouter импортируется из react-router-dom
        <BrowserRouter>
            <App state={state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} //прочитать про bind в интернете
                 updateNewMessageText={store.updateNewMessageText.bind(store)} addMessage={store.addMessage.bind(store)} />
        </BrowserRouter> ,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);