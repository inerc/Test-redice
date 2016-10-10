/**
 * Created by inerc on 26.09.16.
 */
import axios from 'axios';
export const USER_REQUEST = 'USER_REQUEST';
export const USER_RESET_REQUEST = 'USER_RESET_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';
export const authRequest = ({login, password}) => {
    return {
        type: USER_REQUEST,
        login,
        password
    };
};
export const userSuccess = (payload) => {
    return {
        type: USER_SUCCESS,
        payload
    };
};
export const userFailure = (payload) => {
    return {
        type: USER_FAILURE,
        payload
    };
};
// export function userSignupRequest (userData) {
//     return dispatch => {
//         return axios.post('/api/users', userData);
//
//     }
// }
//
//
//
// export function getUsers (userData) {
//
//     return dispatch => {
//         return axios.get('http://62.76.25.114:90/v1/users', userData);
//         // console.log(userData);
//     }
//
// }
//Рестарт пароля? Почему иициализируется дважды?
export const resetPassRequest = ({login, password}) => {
    return {
        type: USER_RESET_REQUEST,
        login,
        password
    };
};

export const userResetSuccess = (payload) => {
    return {
        type: USER_RESET_SUCCESS,
        payload
    };
};