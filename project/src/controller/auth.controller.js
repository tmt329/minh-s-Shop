var db= require('../db');
var jwt = require('jsonwebtoken');
const { send, nextTick } = require('process');
var cookie = require('cookie');
var md5 = require("md5");

module.exports.postNewUser= function(req,res)
{   
    try{
        var data= req.body ;
        var password= data.password ;
        data.password= md5(password);  //hash password
        data.id=100;
        
        db.get("users").push(data).write() ;
      //  var token= jwt.sign({_id : user.id},"mk", {expiresIn:3600});
        res.json({status:200})
        
    
    }
    catch(err)
    {
        console.log(err);
    }
    
}


module.exports.postLogin= function(req,res) {
    try{
        
        var email = req.body.email ;
        var password =   req.body.password;
        
        var user = db.get("users").find({email: email} ).value() ;
        
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
    catch (e){

        console.log(e);
        return res.json({"code" : 100, "status" : "Error with query"});

    }
}

module.exports.getPrivate= function(req,res,next)
{try {
    var cookies = cookie.parse(req.headers.cookie);
    var token= cookies.token;
      var auth = jwt.verify(token, "mk" ) ;
      if(auth)
      {
         next()
      }
      
    }
    catch(err) 
    {
        res.redirect("/sign-in")
    }
}, (req,res,next)=>{
        res.redirect("/")
}