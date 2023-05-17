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
import {ArrayOfDialogsDataType, ArrayOfMessageDataType, ArrOfPostData} from "./index";

type AppPropsType = {
    dialogData:ArrayOfDialogsDataType
    messagesData:ArrayOfMessageDataType
    postData: ArrOfPostData
}
const App = (props:AppPropsType) => {
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
                    <Route path="/profile" render={()=><Profile appPostData={props.postData}/>}/>{/*при использовании Route мы должны использовать render, чтобы отрисовать компоненту если хотим передать в нее пропсы */}
                    <Route  exact path="/dialogs" render={()=><Dialogs appDialogData={props.dialogData} appMessagesData={props.messagesData}/>}/> {/* exact path нужен, чтобы компонента отображала только точный url в данном случае "/dialogs", если будет дополнительный путь например /dialogs/dialog7 то отображения не будет */}
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </BrowserRouter>

    );

}


export default App;
