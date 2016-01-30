/**
 * Created by Primoz on 30/01/16.
 */

var express = require('express');
var app     = express(); //returns the instance od express server

var serveIndex = require('serve-index');
var serveStatic = require('serve-static');

var PORT = process.env.PORT || 3000;

exports.start = function(){

    app.use('/', serveStatic('public'));
    app.use('/', serveIndex('public'));

    console.log('server started');

    app.listen(PORT, function(){

        console.log('server running on port 3000');

    });

};

exports.stop = function(){


}