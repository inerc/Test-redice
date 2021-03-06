/**
 * Created by inerc on 26.09.16.
 */

import express from 'express';
import validateInput from '../shared/validations/login';

let router  = express.Router();



router.post('/', (req, res) =>{
    const {errors, isValid} =  validateInput(req.body);

    if (isValid) {
        res.json({success: true});
    }else
        {
        res.status(400).json(errors);
    }
});

export default router;
