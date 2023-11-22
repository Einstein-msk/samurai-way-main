
type FollowAT = {
    type: "FOLLOW"
    userId:number
}
type UnfollowAT = {
    type: "UNFOLLOW"
    userId:number
}
type SetUsersAT = {
    type:"SET_USERS"
    users:UserType[]
}
type ActionType = FollowAT | UnfollowAT | SetUsersAT;
type InitialUsersStateType = {
    users: UserType[]
}
export type UserType = {
    id:number
    photoUrl:string
    followed:boolean
    fullName:string
    status:string
    location: {
        city:string
        country:string
    }

}
let initialState:InitialUsersStateType={
    users:[]
};

export const usersReducer = (state: InitialUsersStateType = initialState, action: ActionType):InitialUsersStateType => {
    switch (action.type) {
        case "FOLLOW" :
            return {...state, users:state.users.map(u=>u.id===action.userId? {...u, followed:true}:u)}
        case "UNFOLLOW":
            return {...state, users:state.users.map(u=>u.id===action.userId ? {...u, followed:false}:u)};
        case "SET_USERS":
            return {...state, users:[...state.users, ...action.users] }
        default:
            return state
    }
}


export const followAC= (userId:number):FollowAT=> {
    return {type:"FOLLOW", userId}
}
export const unfollowAC= (userId:number):UnfollowAT=> {
return {type:"UNFOLLOW", userId}
}
export const setUsersAC= (users:UserType[]):SetUsersAT=> {
    return {type:"SET_USERS", users}
}
