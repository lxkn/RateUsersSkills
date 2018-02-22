var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var appRoutes = require('api')(router);

app.use(bodyParser.json()); // for parsing json
app.use('/api', appRoutes);

mongoose.connect('mongodb://<lxkn>:<123456Seba>@ds145438.mlab.com:45438/users', function(err){
    if(err){
        console.log('Not conntected to database ' + err);
    }
    else{
        console.log('Connected to MongoDB - users');
    }
});