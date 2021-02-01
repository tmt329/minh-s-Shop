const express= require("express")
const app= express();
const path=require('path');
const bodyParser= require('body-parser');

var db=require('./db');
const port=1000 ;
const itemRoute= require('./route/api');
const authRoute= require('./route/auth.route');
const checkOutRoute= require('./route/check-out');
const userRoute=require('./route/user.route');
var cookieParser = require('cookie-parser')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(__dirname+'/project'));

app.use('/api/items', itemRoute);
app.use('/api/check-out', checkOutRoute ),
app.use('/api/user', userRoute);

app.use('/auth', authRoute);




app.get('*', function(req, res) {
    
    res.sendFile(path.join(__dirname+"/project/index.html") );
    
});


app.listen(port,()=> console.log("Listening"))