const express= require('express') ;
var   userRouter = express.Router();

var path= require('path');
var userController= require('../controller/user.controller');
const { checkAuth } = require('../midleware/checkAuth');
const { user } = require('../model');
const jwt = require('jsonwebtoken');

const { secret } = require('../../config');

userRouter.use(
    (req,res,next) =>{
        const token= req.token || req.params.token || req.headers['x-access-token'] || req.query.token ;
        
        if(token)
        {   
            console.log(token);
            jwt.verify(token, secret, function(err,decoded) 
            {
                if(err)
                {
                    return res.status(403).send({
                        success: false,
                        message:"wrong token"
                    })
                }
                else{
                    req.decoded= decoded;
                    next();
                }
            })
        }
         else
         {
            return res.status(403).send({
                success: false,
                message:"wrong token"
            })
         }
    }
)

userRouter.get("/", userController.getUsers);

userRouter.get("/me", (req,res) =>
{   
    res.send({status:200, user: req.decoded})
})

userRouter.put("/password/:id", userController.changePass)

//userRouter.put("/:id" , userController)

module.exports=userRouter ;