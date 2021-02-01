const express= require('express')
const apiRouter = express.Router();
const db=require('../db.js');
const path= require('path');
var controller= require('../controller/controller');
var checkOutController= require('../controller/checkOut.controller')

apiRouter.get("/id/:id",controller.getId)

apiRouter.get("/man", controller.getMan)
apiRouter.get('/woman',controller.getWoman);
apiRouter.get('/kid', controller.getKid)

apiRouter.get("/", controller.index),

apiRouter.post('/'); 

apiRouter.post("/check-out", checkOutController.postCheckOut);

module.exports=apiRouter ;