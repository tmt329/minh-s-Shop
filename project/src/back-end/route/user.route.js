const express= require('express') ;
var   userRouter = express.Router();

var path= require('path');
var userController= require('../controller/user.controller');

userRouter.get("/", userController.getUsers);

//userRouter.put("/:id" , userController)

module.exports=userRouter ;