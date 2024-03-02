import { CounterActionsTypes } from "../constants/actions-types"

export const incrementByOneCreator = _=>{
    return {
        type : CounterActionsTypes.ByOne.INCREMENT
    }
}

export const decrementByOneCreator = _=>{
    return {
        type : CounterActionsTypes.ByOne.DECREMENT
    }
}

export const resetByOneCreator = _=>{
    return {
        type : CounterActionsTypes.ByOne.RESET
    }
}