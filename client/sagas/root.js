import { put, take, call } from 'redux-saga/effects';
import {USER_REQUEST, userSuccess} from '../actions/signup';
function* rootSaga() {
    let data = yield take(USER_REQUEST);
    result = yield call(
        fetch('http://62.76.25.114:90/v1/login?login=misha&password=123123123')
            .then(response => {
                return response.json();
            })
    );

    yield put(userSuccess(result));
}