
var model= require('../model')

module.exports.getAllItems= function(req,res){

    
    model.item.find({}).then(
        data=> res.send(data)
    )

    
}
module.exports.getById= function(req, res){
    
        var id= req.params.id
        
        model.item.findById(id)
        .then(data =>
            res.send(data))
}

module.exports.postItem=(req, res ) =>
    {       
            
            model.item.create(req.body)
            .then(
                res.send({status:'200'})
            )
            .catch(
                err =>  res.send(err) 
            )

    }

module.exports.putItem=(req, res)=>
    {
            var id= req.params.id;
            console.log(req.body);
            model.item.findByIdAndUpdate(id, req.body)
            .then(data => res.send({status:"200"}))
            .catch(err => res.send({err:err})) ;

    }

module.exports.deleteItem=(req, res) =>
{
     var id= req.params.id ;
     console.log(id);
     model.item.findByIdAndDelete(id)
     .then(data=> res.send({status:"200"}))
     .catch(err => res.send({err:err}))

}


module.exports.getMan=function(req,res)
{
   model.item.find({gender:"man"})
   .then(data => res.send(data))
   .catch(err=> res.send({err:err}))
}
module.exports.getWoman=function(req,res)
{
    model.item.find({gender:"woman"})
   .then(data => res.send(data))
   .catch(err=> res.send({err:err}))
}
module.exports.getKid=function(req,res)
{
    model.item.find({gender:"kid"})
   .then(data => res.send(data))
   .catch(err=> res.send({err:err}))
}
