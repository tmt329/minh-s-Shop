var db= require('../db.js')

module.exports.getUsers=function(req,res)
{
    var item = db.get('users').value();
    res.send(item ); 
}