var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log(`Request was made to: ${req.url}`);
  if(req.url === '/home' || req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
  }
  else if(req.url === '/contact'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html', 'utf8').pipe(res)
  }
  else if(req.url === '/api'){
    var ninjas = [{name: 'Shruthi', age: 22 }, {name: 'Abhay', age: 24}];
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(ninjas));
  }
  else{
    res.writeHead(404, {'Content-Type':'text/html'});
    fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res);
  }
});

server.listen(3000, '127.0.0.1');
console.log('listening on 3000')
