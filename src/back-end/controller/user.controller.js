var model =require('../model')
var md5 = require("md5");

module.exports.getUsers=function(req,res)
{
    model.user.find({})
    .then(data=>res.send(data)
        )
    .catch(err=> res.send({err:err}))
}

module.exports.changePass=(req,res) =>
{    var id= req.params.id;
    var data= req.body;



    model.user.findById(id, (err, user)=>
    {   
        // if(err)
    //     {
    //         res.send(err)
    //     }

        var hashedPass= md5(data.password) ;
        if(hashedPass!= user.password) 
            {
                res.send({status:'100'}) ;
            }
        else{   
            console.log("hi");
            var newPass= md5(data.newPass);
            console.log(newPass);
            
            model.user.findByIdAndUpdate(id,{password:newPass} )
            .then(
                data=>
                {
                    res.send({status:'200'})
                }
            )

           

        }
    })
    





}