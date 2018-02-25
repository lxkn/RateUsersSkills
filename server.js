var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var router = express.Router();
var bodyParser = require('body-parser');
var appRoutes = require('./api')(router);
var mongoose = require('mongoose');
var path = require('path');

app.use(bodyParser.json()); // for parsing json
app.use(express.static(__dirname + '/public'));
//app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use('/api', appRoutes);
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://lxkn:haslo123@ds145438.mlab.com:45438/users', function(err){
    if(err){
        console.log('Not conntected to database ' + err);
    }
    else{
        console.log('Connected to MongoDB - users');
    }
});
app.get('*', function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'));
})
app.listen(port, function(){
    console.log('Running server on port ' +port);
});