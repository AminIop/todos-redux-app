import { combineReducers } from "redux"
import { CounterActionsTypes } from "../constants/actions-types"

const initialState = {
    byOne: {
        value: 0
    },
    byAmount: {
        value: 0
    }
}

const counterByOneReducer = (state = initialState.byOne, action) => {
    switch (action.type) {
        case CounterActionsTypes.ByOne.INCREMENT:
            return {
                ...state,
                value: state.value + 1
            }
        case CounterActionsTypes.ByOne.DECREMENT:
            return {
                ...state,
                value: state.value - 1
            }
        case CounterActionsTypes.ByOne.RESET:
            return {
                ...state,
                value: 0
            }
        default:
            return state
    }
}
const counterByAmountReducer = (state = initialState.byAmount, action) => {
    switch (action.type) {
        case CounterActionsTypes.ByAmount.INCREMENT:
            return {
                ...state,
                value: state.value + action.payload
            }
        case CounterActionsTypes.ByAmount.DECREMENT:
            return {
                ...state,
                value: state.value - action.payload
            }
        case CounterActionsTypes.ByAmount.RESET:
            return {
                ...state,
                value: 0
            }
        default:
            return state
    }
}

const counterReducer = combineReducers({
    ByOne: counterByOneReducer,
    byAmount: counterByAmountReducer
})

export default counterReducer