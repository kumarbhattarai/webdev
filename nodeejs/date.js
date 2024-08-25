// var http=require('http');
// var dt=require('./module');
// const { myDateTime } = require('./module');
// http.createServer (function(req,res){
//     res.write(200,{'content-type':'text/html'});
//     res.write("The date and time is", dt.myDateTime());
//     res.end();
// }).listen(3000)
var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);