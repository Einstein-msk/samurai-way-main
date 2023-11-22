import React from 'react';
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";

import { Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import DialogsContainer from "./components/Dialogs/DialogsContainer";

import UsersContainer from "./components/Users/UsersContainer";




type AppPropsType = {
    // state: RootStateType
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
    // updateNewMessageText: (newText: string) => void
    // addMessage:()=>void
    // dispatch:(action:ActionType)=>void
    // store:any
}
const App = (props: AppPropsType) => {
    console.log("App rerendered")
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className="app-wrapper-content">
                {/*компонента Route анализирует путь от ссылок, взависимости от этого пути переключает компоненты между собой,*/}
                {/*сначала подключим компоненты Dialogs и Profile. Эти компоненты указаны в качестве значений атрибутов в компонентах Route.
                    Сама компонента Route импортируется из react-router-dom. Атрибут path компоненте Route показывает системе роутинга какой тег отрисовать Dialogs
                    или Profile*/}
                <Route path="/profile"
                       render={() => <Profile />}/>{/*при использовании Route мы должны использовать render, чтобы отрисовать компоненту если хотим передать в нее пропсы */}
                <Route exact path="/dialogs" render={() => <DialogsContainer/>}/>{/* exact path нужен, чтобы компонента отображала только точный url в данном случае "/dialogs", если будет дополнительный путь например /dialogs/dialog7 то отображения не будет */}
                <Route exact path="/users" render={() => <UsersContainer/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>


    );

}


export default App;
