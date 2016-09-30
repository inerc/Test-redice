/**
 * Created by inerc on 26.09.16.
 */
import axios from 'axios';

// const backendIpURL = ' http://62.76.25.114:90';

// export function userSignupRequest (userData) {
//     return dispatch => {
//         return axios.get(backendIpURL + '/v1/login', userData, {
//             headers:{
//                 'Content-type': 'application/json',
//                 'Accept': 'application/json',
//                 'api_key': 'olnjascdo02w3iejADFASFnd2k3j22'
//             }
//         });
//
//     }
// }

export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';

export const userRequest = (login, password) => {
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

export function userSignupRequest (userData) {
    return dispatch => {
        return axios.post('/api/users', userData);

    }
}



export function getUsers (userData) {

    return dispatch => {
        return axios.get('http://62.76.25.114:90/v1/users', userData);
        console.log(userData);
    }

}