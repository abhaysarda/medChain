var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log(`Request was made to: ${req.url}`);
  res.writeHead(200, {'Content-Type': 'application/json'});
  var myObj = {
    name: 'Shruthi',
    job: 'Queen',
    age: 22
  };
  res.end(JSON.stringify(myObj));  //expects string or buffer
})

server.listen(3000, '127.0.0.1');
console.log('listening on 3000')
