
import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";
import {StoreType} from "./store";

let reducers = combineReducers({ //функция combineReducers приходит из библиотеки redux и розволяет обьеденить в себе несколько редьюсеров
    profilePageState: profileReducer,
    messagesPageState: messagesReducer,
    sidebar: sidebarReducer
});
export type AppRootStateType=ReturnType<typeof store.getState>

let store:StoreType = createStore(reducers)

export default store;