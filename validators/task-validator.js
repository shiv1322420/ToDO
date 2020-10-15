const joi = require('joi');

//regitser validation
let registerValidation = async(req, res, next) => {
    let data = req.body;
    const schema = joi.object().keys({
        name: joi.string().required(),
        description:joi.string().required()
    })
    try {
        let validationStatus=await joi.valid(data,schema)
        if(validationStatus)
        next();
    } catch (error) {
        console.log(error)
        res.json({
            "message": "data cannot be passed successfully",
            "status": 400,
            "data": error
        })
    }
}



//update validation
let updateValidation = async(req, res, next) => {
    let data = req.body;
    const schema = joi.object().keys({
        name: joi.string(),
        description:joi.string(),
        status:joi.string(),
        completetionDate:joi.date().optional()
    })
    try {
        let validationStatus=await joi.valid(data,schema)
        if(validationStatus)
        next();
    } catch (error) {
        console.log(error)
        res.json({
            "message": "data cannot be passed successfully",
            "status": 400,
            "data": error
        })
    }
}




module.exports = {
    registerValidation,
    updateValidation
}