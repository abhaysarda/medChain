var http = require('http');
var fs = require("fs");

//creating a method to create a readable stream object
var myReadStream = fs.createReadStream(__dirname + '/sampletxt.txt');
var myWriteStream = fs.createWriteStream(__dirname + '/writtentext.txt')
myReadStream.on('data', function(chunk){
  console.log("Chunk received");
  myWriteStream.write(chunk)
})
//The method createReadStream is an event emitter that has a fucntion 'data' to listen to text

// var server = http.createServer(function(req,res){
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hey Ninjas');
//   console.log(req.url);
// });
//
// server.listen(3000, '127.0.0.1');
// console.log('Now listening...');
