import { CounterActionsTypes } from "../constants/actions-types"

export const incrementByOneCreator = _ => {
    return {
        type: CounterActionsTypes.ByOne.INCREMENT
    }
}

export const decrementByOneCreator = _ => {
    return {
        type: CounterActionsTypes.ByOne.DECREMENT
    }
}

export const resetByOneCreator = _ => {
    return {
        type: CounterActionsTypes.ByOne.RESET
    }
}

export const initializeByOneCreator = value => {
    return {
        type: CounterActionsTypes.ByOne.GET,
        payload: value
    }
}

export const getCounterApiStartByOneCreator = _ => ({
    type: ActionTypeCounter.BY_ONE.GET.START
})

export const getCounterApiByOneSuccessCreator = value =>{
    return {
        type : CounterActionsTypes.ByOne.GET.SUCCESS,
        payload : value
    }
}

export const getCounterApiByOneFailureCreator = err =>{
    return {
        type : CounterActionsTypes.ByOne.GET.FAIL,
        payload : err
    }
}