import {AppRootReducer} from "../Components/Counter2/store/store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("AppState")
        if (serializedState===null){
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (err){
        return undefined
    }

}
