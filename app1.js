var express = require('express');
var app = express();
var async = require('async');


app.get('/', function(req, res){

    async.series(
        [
          function(done) {
            console.log("hello people");
            done();
          },
          function(done) {
            console.log("you are awesome");
            done();
          },
      ], function() {
        console.log("thank you");
      });

})

app.listen(3000);

