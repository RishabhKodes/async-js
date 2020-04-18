var express = require('express');
var app = express();

app.post('/', function (req, res) {
      res.end({"message":"Hello World"});
})

var server = app.listen(process.env.PORT, function () {
      if (err){
            console.log(err);
      }
      else{
   var port = server.address().port
   console.log("Example app listening at port %s", port)
            }})

