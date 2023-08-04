import React from 'react';
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {StateType} from "./Redux/state";


type AppPropsType = {
    state: StateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    updateNewMessageText: (newText: string) => void
    addMessage:()=>void
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
                       render={() => <Profile profilePageState={props.state.profilePageState} addPost={props.addPost}
                                              updateNewPostText={props.updateNewPostText}/>}/>{/*при использовании Route мы должны использовать render, чтобы отрисовать компоненту если хотим передать в нее пропсы */}
                <Route exact path="/dialogs" render={() => <Dialogs messagesPageState={props.state.messagesPageState}
                                                                    updateNewMessageText={props.updateNewMessageText} addMessage={props.addMessage}/>}/> {/* exact path нужен, чтобы компонента отображала только точный url в данном случае "/dialogs", если будет дополнительный путь например /dialogs/dialog7 то отображения не будет */}
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>


    );

}


export default App;
