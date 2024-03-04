import { takeLatest } from "redux-saga/effects";

import { CounterActionsTypes } from "../constants/actions-types";
import { handleGetValueByOne } from "./handlers/counter";

export function* watcherSaga() {
    yield takeLatest(
        CounterActionsTypes.ByOne.GET.START, handleGetValueByOne
    )
}