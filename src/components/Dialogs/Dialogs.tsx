import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


type DialogPropsType = {
    name: string
    id: string
}
const DialogItems = (props: DialogPropsType) => {
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
const Dialogs = () => {
    return (
        // делаеем страницу Messages. Она будет состоять из двух div. Первая будет - s.dialogs,  а вторая - s.messages.
        // Отобразим их в виде 2х колонок с помощью display: grid в Dialogs.module.css.
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItems name="Zhenya" id="1"/>
                <DialogItems name="Bogdan" id="2"/>
                <DialogItems name="Egor" id="3"/>
                <DialogItems name="Sasha" id="4"/>
                <DialogItems name="Alexey" id="5"/>
            </div>

            <div className={s.messages}>
                <Messages message="Hi!"/>
                <Messages message="How are you?"/>
                <Messages message="What are you doing today?"/>
                <Messages message="What are you doing today?"/>
                <Messages message="What are you doing today?"/>

            </div>

        </div>
    );
};

export default Dialogs;