const mongoose = require('mongoose');
const { stringify } = require('querystring');

mongoose.connect('mongodb://localhost/project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
const Schema = mongoose.Schema;



const client= new Schema(
    {   
        firstName : String ,
        lastName : String,  
        address : String ,
        phoneNumber : Number ,
        email: String ,
        cart: String
        
    },
    {
        collection:"clients"
    }
    
)

const cart= new Schema({
    id:String,
    order: String 
    
},
{
    collection:"orders",
    
})

const user= new Schema({
    email: String,
  password: String,
  firstName: String,
  lastName: String,
  birthday: String,
  address: String,
})
const item = new Schema({
    id:String,
    gender:String,
    name:String,
    price:Number,
    type:String,
    link: 
    {
        link1: String,
        link2:String,
        link3:String,
        link4:String
    }


},
{
    collection:"items"
})

module.exports.client = mongoose.model('client', client);

module.exports.cart=mongoose.model('cart',cart) ;

module.exports.user=mongoose.model('user', user) ;

module.exports.item=mongoose.model('item', item);