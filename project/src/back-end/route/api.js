const express= require('express')
const apiRouter = express.Router();

const path= require('path');
var controller= require('../controller/controller');

apiRouter.get("/", controller.getAllItems)

apiRouter.post("/", controller.postItem);

apiRouter.get("/id/:id",controller.getById);


apiRouter.put("/id/:id", controller.putItem);

apiRouter.delete("/id/:id", controller.deleteItem);


apiRouter.get("/man", controller.getMan)
apiRouter.get('/woman',controller.getWoman);
apiRouter.get('/kid', controller.getKid)







module.exports=apiRouter ;