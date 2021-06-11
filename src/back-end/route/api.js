const express= require('express');

const jwt = require('jsonwebtoken');
const apiRouter = express.Router();

const path= require('path');
const { secret } = require('../../config');
var controller= require('../controller/controller');
const { checkAuth } = require('../midleware/checkAuth');

apiRouter.get("/", controller.getAllItems)



apiRouter.post("/", controller.postItem);

apiRouter.get("/id/:id",controller.getById);


apiRouter.put("/id/:id", controller.putItem);

apiRouter.delete("/id/:id", controller.deleteItem);


apiRouter.get("/man", controller.getMan)
apiRouter.get('/woman',controller.getWoman);
apiRouter.get('/kid', controller.getKid)







module.exports=apiRouter ;