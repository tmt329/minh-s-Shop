var db= require('../db.js')

module.exports.index= function(req,res){

    var item = db.get('items').value();
    res.send(item ); 
}
module.exports.getId= function(req, res){
    
        var id= parseInt(req.params.id);
        var item = db.get('items').find({id:id});
        res.send(item );
    
}

module.exports.getMan=function(req,res)
{
    var item = db.get('items').filter(({gender})=> gender==='man');
    res.send(item);
}
module.exports.getWoman=function(req,res)
{
    var item = db.get('items').filter(({gender})=> gender==='woman');
    res.send(item);
}
module.exports.getKid=function(req,res)
{
    var item = db.get('items').filter(({gender})=> gender==='kid');
    res.send(item);
}
