var model =require('../model')

module.exports.getUsers=function(req,res)
{
    model.user.find({})
    .then(data=>res.send(data)
        )
    .catch(err=> res.send({err:err}))
}

