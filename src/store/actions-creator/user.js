import { UserActionsTypes } from "../constants/actions-types"


export const getUserPlaceHolderStartCreator = _ => {
    return {
        type: UserActionsTypes.UserPlaceHolder.GET.START
    }
}

export const getUserPlaceHolderSuccessCreator = value => {
    return {
        type: UserActionsTypes.UserPlaceHolder.GET.SUCCESS,
        payload: value
    }
}

export const getUserPlaceHolderFailureCreator = err => {
    return {
        type: UserActionsTypes.UserPlaceHolder.GET.FAIL,
        payload: err
    }
}