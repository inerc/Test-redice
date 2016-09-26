/**
 * Created by inerc on 26.09.16.
 */
import axios from 'axios';

export function userSignupRequest (userData) {
    return dispatch => {
        return axios.post('/api/users', userData);

    }
}