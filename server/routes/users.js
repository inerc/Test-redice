/**
 * Created by inerc on 26.09.16.
 */

import express from 'express';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

let router  = express.Router();

function validateInput(data) {
    let errors ={};

    if (Validator.isNull(data.username)){
        errors.username = 'Email is required';
    }

    if (!Validator.isEmail(data.username)){
        errors.username = 'Email is invalid';
    }

    if (Validator.isNull(data.password)){
        errors.password = 'Password is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

router.post('/', (req, res) =>{
    const {errors, isValid} =  validateInput(req.body);
    if (!isValid){
        res.status(400).json(errors);
    }
});

export default router;
