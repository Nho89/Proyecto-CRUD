import {body, check } from "express-validator"
import {validateResult} from "../helpers/validatorHelper.js"
import PosterModel from "../models/PosterModel.js"

export const validateCreatePoster = [
    body('name').notEmpty().withMessage('El nombre es requerido'),
    body('director').notEmpty().withMessage('Director no debe estar vacío'),
    body('year').isInt().withMessage('Year debe tener números enteros'),
    body('imageUrl').notEmpty().withMessage('La imagen es obligatoria'),
    (req, res, next)=>{
        validateResult(req, res, next)
    }  
    
]; 

export const validateDeletePoster=[
    check("id")
        .exists().notEmpty().withMessage('ID is required')
        .custom(async (id) => {
            const poster = await PosterModel.findByPk(id);
            if (!poster) {
                throw new Error('The poster you want to delete does not exist.');
            }
        }),
     validateResult
]

export const  validatePutPosters= [
    check("name")
    .exists()
    .notEmpty()
    .withMessage('Name is required'),

    check("year")
    .exists()
    .notEmpty()
    .withMessage('Year is required'),

    check("director")
    .exists()
    .notEmpty()
    .withMessage('Director is required'),

    check("imageUrl")
    .exists()
    .notEmpty()
    .withMessage('ImageUrl is required'),



    check("id")
    .exists()
    .notEmpty()
    .custom(
        async (id)=>{
            const poster = await PosterModel.findByPk(id);
            if(!poster){
                throw new Error('The poster was not found')
            }
        }
    ),
    validateResult
]