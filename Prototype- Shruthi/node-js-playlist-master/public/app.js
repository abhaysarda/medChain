// //normal function
// function sayHi(){
//   console.log('hi')
// }
// sayHi();
//
// //function expression
// var sayBye= function(){
//   console.log('Bye')
// };
// //function passed as an argument inside a function
// function callFunction(fun){
//   fun();
// }
// callFunction(sayBye)
//console.log('hey ninjas');
// var time = 0;
// var timer = setInterval(function(){
//   time+=2;
//   console.log(time+ 'seconds have passed');
//   if (time>5){
//     clearInterval(timer)
//   }
// }, 2000);
//
// console.log(__dirname);
//
// console.log(__filename);
// var stuff = require('./stuff');
// console.log(stuff.counter(['shruthi','abhay', 'siva']));
// console.log(stuff.adder(3,-8));

var events = require('events');
var util = require('util');

var Person = function(name){
  this.name = name;
};
// Event emitter can be used to use/create/respond to custom events

util.inherits(Person, events.EventEmitter);

var Shruthi = new Person('Shruthi');
var Abhay = new Person('Abhay');
var Siva = new Person('Siva');
var people = [Shruthi, Abhay, Siva];

people.forEach(function(pers){
  pers.on('speak', function(msg){
    console.log(pers.name + ' says ' + msg);
  });
});


Shruthi.emit('speak', 'still trying');
