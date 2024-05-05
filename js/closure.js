// every function declared in window object, must hold parent window object as scope(property) 
// var sum = function(num1, num2){
//     return num1 + num2;
// };
// console.dir(sum);

// lexical scoping: child can acess parent's property
// var num1 = 2;
// var num2 = 3;
// var sum = function(){
//     return num1 + num2;
// }
// console.dir(sum);

// clousure is introduced
// clousure is a funcion with some remembered value
// var num1 = 2;
// var sum = function(){
//     var num2 = 3;
//     return function(){
//         return num1 + num2;
//     }
// }
// console.dir(sum());

// (function(){
//     var num1 = 2;
//     var sum = function(){
//         var num2 = 3;
//         return function(){
//             return num1;
//         }
//     }
//     console.dir(sum);
// })()

// practical example of closure
// we can see the private property because of closure
// function bankAccount(initialBalance){
//     var balance = initialBalance;
//     return function(){
//         return balance;
//     }
// }
// var account = bankAccount(100000);
// console.dir(account);

// (function(){
//     var num1 = 2;
// var num2 = 3;
// var sum = function(){
//     return num1 + num2;
// }
// console.log(sum());
// console.dir(sum);
// var num1 = 6;
// var num2 = 7;
// console.log(sum());
// console.dir(sum);
// })();
// (function(){
//     let num1 = 2;
// let num2 = 3;
// var sum = function(){
//     return num1 + num2;
// }
// console.dir(sum);

// })();
// function stopWatch() {
//   var startTime = Date.now();
//   function getDelay() {
//     console.log(Date.now() - startTime);
//   }
//   return getDelay;
// }
// var timer = stopWatch();
// for (var i = 0; i < 10000000; i++) {
//   var a = Math.random() * 10000000;
// }
// timer();
// console.dir(timer);
// timer = null;
// console.dir(timer);

// console.dir(Date);
// var a;
// function async() {
//   a = 20;
//   var myFunc = () => {
//     console.log(a);
//   };
//   setTimeout(myFunc, 3000);
// }
// async();
// a = 30;
// function apiFunction(url) {
//   fetch(url).then((res) => console.log(res));
// }
// apiFunction('https://jsonplaceholder.typicode.com/todos/1');
// console.log('I am here!');
// var i;
// for (i = 0; i < 3; i++) {
//   const f = () => {
//     console.log(i);
//   };
//   f();
// }
// var i;
// for (i = 0; i < 3; i++) {
//   const myFunc = () => {
//     console.log(i);
//   };
//   console.log(i);
//   console.dir(myFunc);
//   setTimeout(myFunc, 3000);
// }
// console.log(i);
var a = 10;
