var express = require("express");
var app = express();

app.use(express.static(__dirname+'/'));

app.get('/', function(req, res){
  res.set({'content-type': 'text/html'});
  res.sendfile(__dirname + '/');
});

var port = process.env.PORT || 3643;
app.listen(port, function() {
  console.log("Listening on " + port);
});