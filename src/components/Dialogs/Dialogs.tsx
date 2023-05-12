import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


type DialogItemsPropsType = {
    name: string
    id: number
}
const DialogItems = (props: DialogItemsPropsType) => {
    let path = "/dialogs/" + props.id; {/*создали переменную path чтобы использовать ее как путь в NavLink */}
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink> {/*Про NavLink можно прочитать в Nav.tsx файле*/}
        </div>
    )
}

type MessagesPropsType = {
    message: string
}
const Messages = (props: MessagesPropsType) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

//типизация  ПЕРЕМЕННЫХ dialogData, messagesData, которые находятся внутри компоненты Dialogs
type ArrayOfDialogsDataType =Array<DialogDataType>
type DialogDataType = {
    id: number
    name:string
};
type ArrayOfMessageDataType = MessagesType[]
type MessagesType={
    id: number
    message: string
}

const Dialogs = () => {
    let dialogData: ArrayOfDialogsDataType = [
        {id:1, name: "Zhenya"},
        {id:2, name: "Bogdan"},
        {id:3, name: "Egor"},
        {id:4, name: "Sasha"},
        {id:5, name: "Alexey"}
    ]

    let messagesData: ArrayOfMessageDataType = [
        {id:1, message: "Hi!"},
        {id:2, message: "How are you?"},
        {id:3, message: "What are you doing today?"},
        {id:4, message: "What are you doing today?"},
        {id:5, message: "What are you doing today?"}
    ]

    let mappedDialogData = dialogData.map(d=><DialogItems name={d.name} id={d.id}/>)
    let mappedMessagesData= messagesData.map(m=><Messages message={m.message}/>)
    return (
        // делаеем страницу Messages. Она будет состоять из двух div. Первая будет - s.dialogs,  а вторая - s.messages.
        // Отобразим их в виде 2х колонок с помощью display: grid в Dialogs.module.css.
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {mappedDialogData}
                {/*Вместо захардкоженных компонент DialogItems, теперь они отображаются с помощью переменной mappedDialogData */}
                {/*<DialogItems name={dialogData[0].name} id={dialogData[0].id}/>*/}
                {/*<DialogItems name={dialogData[1].name} id={dialogData[1].id}/>*/}
                {/*<DialogItems name={dialogData[2].name} id={dialogData[2].id}/>*/}
                {/*<DialogItems name={dialogData[3].name} id={dialogData[3].id}/>*/}
                {/*<DialogItems name={dialogData[4].name} id={dialogData[4].id}/>*/}
            </div>

            <div className={s.messages}>
                {mappedMessagesData}
                {/*Вместо захардкоженных компонент Messages, теперь они отображаются с помощью переменной mappedMessagesData */}
                {/*<Messages message={messagesData[0].message}/>*/}
                {/*<Messages message={messagesData[1].message}/>*/}
                {/*<Messages message={messagesData[2].message}/>*/}
                {/*<Messages message={messagesData[3].message}/>*/}
                {/*<Messages message={messagesData[4].message}/>*/}

            </div>

        </div>
    );
};

export default Dialogs;