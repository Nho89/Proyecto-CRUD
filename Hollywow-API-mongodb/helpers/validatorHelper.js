import {validationResult} from 'express-validator'

export const validateResult = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        next();
    }
    else{
        return res.status(400).json({ errors: errors.array() });
    } 
};
