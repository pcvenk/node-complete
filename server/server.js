/**
 * Created by Primoz on 30/01/16.
 */

var express = require('express');
var app = express(); //returns the instance od express server

var PORT = process.env.PORT || 3000;

exports.start = function(){

    console.log('server started');

    app.listen(PORT, function(){

        app.get('/', function(req, res){

           res.send('Hello world');

        });

        console.log('server running on port 3000');

    });

};

exports.stop = function(){


}