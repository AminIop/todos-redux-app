import { call, put } from 'redux-saga/effects'
//import { get } from 'loadash'

import { getCounterApiByOneFailureCreator, getCounterApiByOneSuccessCreator } from "../../actions-creator/counter";
import { requestGetCounterByOne } from "../requests/counter";

export function* handleGetValueByOne() {

    try {
        const response = yield call(requestGetCounterByOne)
        const { data } = response
        //const value = get(data, 'value', 0)
        const value = data?.value || 0
        yield put(getCounterApiByOneSuccessCreator(value))

    } catch (err) {

        yield put(getCounterApiByOneFailureCreator(err))
    }

}