var express = require('express');
var app = express();

app.get('/', function (req, res) {
      res.end('Hello World');
})

var server = app.listen(process.env.PORT, function () {
//    var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at port %s", port)
})

