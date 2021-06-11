var express=require('express');
var controller=require('../controller/auth.controller');
var route= express.Router();

const jwt = require('jsonwebtoken');

const { secret } = require('../../config');

route.post("/register", controller.postNewUser)

route.post("/login", controller.postLogin)

// route.use((req,res,next) =>{
//     const token= req.token || req.params.token || req.headers['x-access-token'] || req.query.token ;
//     console.log(token);
//     if(token)
//     {   
        
//         jwt.verify(token, secret, function(err,decoded) 
//         {
//             if(err)
//             {
//                 return res.status(403).send({
//                     success: false,
//                     message:"wrong token"
//                 })
//             }
//             else{
//                 req.decoded= decoded;
//                 next();
//             }
//         })
//     }
//      else
//      {
//         return res.status(403).send({
//             success: false,
//             message:"wrong token"
//         })
//      }
// })

route.get('/me', (req,res) =>
{
    res.send({status:200, user: req.decoded})
});

// apiRouter.use(checkAuth);



module.exports =route ;