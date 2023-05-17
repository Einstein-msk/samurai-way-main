import React from 'react';
import s from "./../Dialogs.module.css"
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


export default DialogItems;