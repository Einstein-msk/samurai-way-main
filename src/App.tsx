import React from 'react';
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/Dialogs/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = () => {
    return (
        // компонента BrowserRouter нужна для того чтобы использовать систему роутинга (компонента Route). Эта компонента BrowserRouter
        // должна обрамлять всю JSX разметку в App. Сама компонента BrowserRouter импортируется из react-router-dom
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    {/*компонента Route анализирует путь от ссылок, взависимости от этого пути переключает компоненты между собой,*/}
                    {/*сначала подключим компоненты Dialogs и Profile. Эти компоненты указаны в качестве значений атрибутов в компонентах Route.
                    Сама компонента Route импортируется из react-router-dom. Атрибут path компоненте Route показывает системе роутинга какой тег отрисовать Dialogs
                    или Profile*/}
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>

    );

}


export default App;
