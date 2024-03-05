
import { call, put } from 'redux-saga/effects';
import { requestGetUserPlaceHolder } from '../requests/user';
import { getUserPlaceHolderFailureCreator, getUserPlaceHolderSuccessCreator } from '../../actions-creator/user';

export function* handleUserPlaceHolder() {

    try {
        const response = yield call(requestGetUserPlaceHolder)
        const { data } = response
        yield put(getUserPlaceHolderSuccessCreator(data))

    } catch (err) {

        yield put(getUserPlaceHolderFailureCreator(err))
    }

}