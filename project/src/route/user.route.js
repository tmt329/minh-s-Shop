const express= require('express')
var   userRouter = express.Router();
var db=require('../db.js');
var path= require('path');
var userController= require('../controller/user.controller');

userRouter.get("/", userController.getUsers);

module.exports=userRouter ;