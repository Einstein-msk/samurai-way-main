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
            <App state={state} dispatch={store.dispatch.bind(store)} />//прочитать про bind в интернете
        </BrowserRouter> ,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);