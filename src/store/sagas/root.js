import { takeLatest } from "redux-saga/effects";

import { CounterActionsTypes, UserActionsTypes } from "../constants/actions-types";
import { handleGetValueByOne } from "./handlers/counter";
import { handleUserPlaceHolder } from "./handlers/user";

export function* watcherSaga() {
    yield takeLatest(
        CounterActionsTypes.ByOne.GET.START, handleGetValueByOne
    )
    yield takeLatest(
        UserActionsTypes.UserPlaceHolder.GET.START, handleUserPlaceHolder
    )

}