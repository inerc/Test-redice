import { put, take, call, fork } from 'redux-saga/effects';
import {USER_REQUEST, USER_RESET_REQUEST, userSuccess, userFailure} from '../actions/auth';
export function* rootSaga() {
    yield [
        fork(fetchAuth),
        fork(resetAuth)
    ];
}
function Redirect(location) {
    window.location=location;
}
function fetchApi(data) {
    return fetch(`/api/auth`, {method: 'POST', body: JSON.stringify(data), headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }})
        .then((response) => {
            if (response.status !== 200) {
                throw new Error('error!');
            }
            return response.json();
        })
        .catch(response => {
            return {error: response}
        });
}
function* fetchAuth() {
    while (true) {
        let data = yield take(USER_REQUEST);
        let result = yield call(fetchApi, data);
        if (result.error) {
            yield put(userFailure(result));
        } else {
            yield call(Redirect('/'));
            yield put(userSuccess(result));
        }
    }
}
function resetApi(data) {
    return fetch(`/api/reset`, {method: 'POST', body: JSON.stringify(data), headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }})
        .then((response) => {
            if (response.status !== 200) {
                throw new Error('error!');
            }
            return response.json();
        })
        .catch(response => {
            return {error: response}
        });
}
function* resetAuth() {
    while (true) {
        let data = yield take(USER_RESET_REQUEST);
        let result = yield call(resetApi, data);
        if (result.error) {
            yield put(userFailure(result));
        } else {
            yield put(userSuccess(result));
        }
    }
}