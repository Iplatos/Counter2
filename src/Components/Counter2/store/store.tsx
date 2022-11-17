import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {CounterOneReducer} from "../reducers";
import {reducerTwo} from "./reducerTwo";
import thunk from "redux-thunk"
import {loadState, } from "../../../utils/localStorageUtils";


export const rootReducer = combineReducers({
    countreone: CounterOneReducer,
    counterTwo: reducerTwo
})
/*let perloadState = loadState();
let persistedTodosString = localStorage.getItem("AppState")
if (persistedTodosString) {
    perloadState = JSON.parse(persistedTodosString)
}*/

export const store = legacy_createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
    localStorage.setItem("AppState", JSON.stringify(store.getState()))

    })



export type AppRootReducer = ReturnType<typeof rootReducer>