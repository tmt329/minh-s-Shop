const express= require("express")
const app= express();
const path=require('path');
const bodyParser= require('body-parser');
var MongoClient = require('mongodb').MongoClient;


const port=1000 ;

const itemRoute= require('./back-end/route/api');
const authRoute= require('./back-end/route/auth.route');
const checkOutRoute= require('./back-end/route/check-out');
const userRoute=require('./back-end/route/user.route');
var cookieParser = require('cookie-parser');




let config=require('./config' ) ;

let init = async() =>
{
    try
    {
        let database= await MongoClient.connect(config.pool) ;
        initServer(database) ;

    }
    catch(e)
    {
        console.log(" Connection problem");
    }

}
let initServer= (database) =>
{
    app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(__dirname+'/project'));
app.use(function(req,res,next) {
    res.setHeader('Access-Control-Allow-Origin' ,'*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    next();
})
app.use('/api/items', itemRoute);
app.use('/api/check-out', checkOutRoute ),
app.use('/api/user', userRoute);

app.use('/auth', authRoute);




app.get('*', function(req, res) {
    
    res.sendFile(path.join(__dirname+"/project/index.html") );
    
});


app.listen(port,()=> console.log("Listening"))
}

init() ;
