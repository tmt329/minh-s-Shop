const mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost/Project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
const Schema = mongoose.Schema;

const account = new Schema({
  
  username: String,
  password: String,
 
},
{
    collection :"Account"
});

const AccountModel = mongoose.model('account', account);

AccountModel.find({})
.then( 
    data => 
    {  console.log(`data`, data);
})
.catch(
    err =>
    {
        console.log(`err`, err);
    }
)