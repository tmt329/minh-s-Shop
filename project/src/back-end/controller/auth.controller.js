
var jwt = require('jsonwebtoken');

var cookie = require('cookie');
var md5 = require("md5");
var model =require('../model')

module.exports.postNewUser= function(req,res)
{   
    try{
        var data= req.body ;
        var password= data.password ;
        data.password= md5(password);  //hash password
        
        model.user.findOne({email:req.body.email}) 
        .then(
            data => 
            {
                if(data) 
                {
                   
                   
                    return
                    
                }
                else 
                {
                   return model.user.create({
            
                        email: req.body.email,
                        password: req.body.password,
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        birthday: req.body.birthday,
                        address: req.body.address,
                    }
                    )
                    
                }
            }
        )
        .then(data => 
           { if(data) 
            res.json({status : 200} )
            else
            res.json({err :"fail"})
     } ) 
        
        .catch(err=> res.json({err : 'fail'}))

      //  db.get("users").push(data).write() ;
      //  var token= jwt.sign({_id : user.id},"mk", {expiresIn:3600});
       
        
    
    }
    catch(err)
    {
         res.status(500).json('failed')
    }
    
}


module.exports.postLogin= function(req,res) {
    try{
        
        var email = req.body.email ;
        var password =   req.body.password;
        
        model.user.findOne({email: email})
        .then( user=>
            {
                if(!user)
                {  
            res.send({description: "wrong email"}) ;
            return;
                }  
        
            if(user.password!= md5(password))
                {
            res.send({description:"wrong pass"}) ;
            return;
                    }
                
            
        
            var token= jwt.sign({_id : user.id},"mk", {expiresIn:3600}); //o day them level cua user
                  
                    
            return res.json( {status:200,token:token, user:user});
            }
            

        )
        .catch()
        

   
    }
    catch (e){

        console.log(e);
        return res.json({"code" : 100, "status" : "Error with query"});

    }
}

