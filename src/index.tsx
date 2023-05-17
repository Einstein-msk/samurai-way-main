import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';




export type ArrayOfDialogsDataType =Array<DialogDataType>
export type DialogDataType = {
    id: number
    name:string
};
export type ArrayOfMessageDataType = MessagesType[]
export type MessagesType={
    id: number
    message: string
}

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




export type ArrOfPostData = PostDataType[]
export type PostDataType = {
    id: number
    post: string
    likeCount: number
};

let postData: ArrOfPostData = [
    {id:1, post: "Hey how are you?!", likeCount: 17},
    {id:2, post: "Now I'm on Seychelles!", likeCount: 35},
    {id:3, post: "F...ck!!! I forgot to by my Whiskas!", likeCount: 60},
    {id:4, post: "The weather is fantastic!!!!", likeCount: 34},

]

ReactDOM.render(
    <App dialogData={dialogData} messagesData={messagesData}
         postData={postData} />,
    document.getElementById('root')
);