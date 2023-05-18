


 export type StateType = {
    profilePageState: {
        postData: PostDataType[]
    }
    messagesPageState: {
        dialogData: Array<DialogDataType>
        messagesData: MessagesType[]
    }
}

export type PostDataType = {
    id: number
    post: string
    likeCount: number
}

export type MessagesType={
    id: number
    message: string
}

export type DialogDataType = {
    id: number
    name:string
};

 let state = {
    profilePageState: {
        postData: [
            {id:1, post: "Hey how are you?!", likeCount: 17},
            {id:2, post: "Now I'm on Seychelles!", likeCount: 35},
            {id:4, post: "The weather is fantastic!!!!", likeCount: 34},

        ]
    } ,
    messagesPageState: {
        dialogData: [
            {id:1, name: "Zhenya"},
            {id:2, name: "Bogdan"},
            {id:3, name: "Egor"},
            {id:4, name: "Sasha"},
            {id:5, name: "Alexey"}
        ],
        messagesData: [
            {id:1, message: "Hi!"},
            {id:2, message: "How are you?"},
            {id:3, message: "What are you doing today?"},
            {id:4, message: "What are you doing today?"},
            {id:5, message: "What are you doing today?"}
        ]
    }

}

export default state;












