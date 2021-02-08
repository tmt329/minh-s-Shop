var express=require('express');
var controller=require('../controller/auth.controller');
var route= express.Router();

route.post("/register", controller.postNewUser)

route.post("/login", controller.postLogin)




module.exports =route ;