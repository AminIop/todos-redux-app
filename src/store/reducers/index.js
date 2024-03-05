import { combineReducers } from "redux"
import { StoreTypes } from "../constants/stores-types"
import todoReducer from "./todoReducer"
import counterReducer from "./counterReducer"
import userReducer from "./userReducer"

const initialState = {
    todos: [
        {
            id: 1,
            title: 'first todo',
            isCompleted: false
        }
    ]
}

const rootReducer = combineReducers({
    [StoreTypes.CounterStore]: counterReducer,
    [StoreTypes.TodoStore]: todoReducer,
    [StoreTypes.User] : userReducer
})

export default rootReducer