import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from "./Redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {RootStateType} from "./Redux/store";
import {Provider} from "react-redux";


//export let renderEntireTree= (state:RootStateType)=> {
    ReactDOM.render(
        // компонента BrowserRouter нужна для того чтобы использовать систему роутинга (компонента Route). Эта компонента BrowserRouter
        // должна обрамлять всю JSX разметку в App. Сама компонента BrowserRouter импортируется из react-router-dom
        //прочитать про bind в интернете
        <BrowserRouter>
            {/*<StoreContext.Provider value={store}>*/}
            {/*    <App  />*/}
            {/*</StoreContext.Provider>*/}
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter> ,
        document.getElementById('root')
    );
//}

//renderEntireTree(store.getState());
// store.subscribe(()=>{
//     let state= store.getState();
//     renderEntireTree(state);
// });