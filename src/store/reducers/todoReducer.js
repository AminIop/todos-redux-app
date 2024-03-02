import { StoreTypes } from "../constants/stores-types"

const initialState = {
    todos: [
        {
            id: 1,
            title: 'first todo',
            isCompleted: false
        }
    ]
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case StoreTypes.TodoStore:
            return state
        case StoreTypes.CounterStore:
            return state
        default:
            return state
    }
}

export default todoReducer