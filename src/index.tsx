import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from "./Redux/state";
import {BrowserRouter} from "react-router-dom";





ReactDOM.render(
    // компонента BrowserRouter нужна для того чтобы использовать систему роутинга (компонента Route). Эта компонента BrowserRouter
    // должна обрамлять всю JSX разметку в App. Сама компонента BrowserRouter импортируется из react-router-dom
    <BrowserRouter>
        <App state={state} />
    </BrowserRouter> ,
    document.getElementById('root')
);