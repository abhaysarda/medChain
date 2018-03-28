var fs = require('fs');

// fs.readFile('sampletxt.txt', 'utf8', function(err,data){
//   fs.writeFileSync('writeme.txt', data)
// });

//fs.unlink('writeme.txt')

//fs.mkdirSync('stuff')
// fs.mkdir('stuff', function(){
//   fs.readFile('sampletxt.txt', 'utf8', function(err, data){
//     fs.writeFile('./stuff/writeMe.txt', data);
//   })
// });
fs.unlink('./stuff/writeMe.txt', function(){
  fs.rmdir('stuff');
});
