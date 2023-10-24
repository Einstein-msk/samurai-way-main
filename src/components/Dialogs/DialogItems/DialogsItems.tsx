import React from 'react';
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogDataType} from "../../../Redux/store";


type DialogItemsPropsType = DialogDataType

const DialogItems = (props: DialogItemsPropsType) => {
    let imgStyle= {
        width: "50px",
        height:"50px",
        borderRadius: "30px",
        marginTop: "10px",
        border: "3px solid blue"



    }
    let path = "/dialogs/" + props.id; {/*создали переменную path чтобы использовать ее как путь в NavLink */}
    return (
        <div className={s.dialog}>
            <img style={imgStyle} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8cuoE-rqikd9Y0LtYk-wxzEGJa_buk2c9Sg&usqp=CAU"}/>
            <NavLink to={path}>{props.name}</NavLink> {/*Про NavLink можно прочитать в Nav.tsx файле*/}
        </div>
    )
}


export default DialogItems;