const express= require('express')
const checkOutRouter = express.Router();
const db=require('../db.js');
const path= require('path');
var checkOutController= require('../controller/checkOut.controller')

checkOutRouter.post("", checkOutController.postCheckOut);


module.exports=checkOutRouter;