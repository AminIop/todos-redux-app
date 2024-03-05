import { combineReducers } from "redux"
import { UserActionsTypes } from "../constants/actions-types"

const initialState = {
    userPlaceHolder: {
        data: null,
        loading: false,
        error: null
    }
}

const userPlaceHolderReducer = (state = initialState.userPlaceHolder, action) => {
    switch (action.type) {
        case UserActionsTypes.UserPlaceHolder.GET.START:
            return {
                ...state,
                loading: true
            }
        case UserActionsTypes.UserPlaceHolder.GET.SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                data: action.payload
            }
        case UserActionsTypes.UserPlaceHolder.GET.FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}


const userReducer = combineReducers({
    userPlaceHolder : userPlaceHolderReducer 
})

export default userReducer