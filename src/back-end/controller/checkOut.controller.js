var model= require('../model');
var mongoose=require('mongoose')


module.exports.postCheckOut=function(req,res)
{
    var _id =mongoose.Types.ObjectId().toHexString(); 

    model.cart.create({
        order: JSON.stringify(req.body.cart) ,
        id: _id
    })
    .then();
    

    model.client.create( {   
        firstName : req.body.client.firstName ,
        lastName : req.body.client.lastName,  
        address : req.body.client.address ,
        phoneNumber : req.body.client.phoneNumber ,
        email: req.body.client.email ,
        cart : _id 
        
    })
    .then( data => 
        {
            res.json("Successfull")
            console.log("done");
        } )

    .catch(err =>
        {
            res.status(500).json("Unsuccessful") ;
        })
}

