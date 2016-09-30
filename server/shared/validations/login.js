/**
 * Created by inerc on 27.09.16.
 */

import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';


export default function validateInput(data) {
    let errors ={};

    if (Validator.isNull(data.username)){
        errors.username = 'Введите логин';
    }
    //
    // if (!Validator.isString(data.username)){
    //     errors.username = 'Email is invalid';
    // }

    if (Validator.isNull(data.password)){
        errors.password = 'Введите пароль';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}