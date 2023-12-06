// var topic = 'JavaScript Execution Context';
// function getTopic() {
//   return topic;
// }
// getTopic();

// console.log(topic);
// var topic = 'JavaScript Execution Context';
// function getTopic() {
//   return topic;
// }
// getTopic();

// var a = 1;
// function one() {
//   console.log(a);
//   function two() {
//     console.log(b);
//     var b = 2;
//     function three(d) {
//       console.log(c + d);
//       let c = 3;
//     }
//     three(4);
//   }
//   two();
// }
// one();
// function test() {

// }
// console.log(test());

// scope/lexical scoping
// function hello() {
//   var msg = 'Hello World';
// }
// hello();
// console.log(msg);

// closure
var sum = 0;
function doSum(a) {
  return function (b) {
    return a + b;
  };
}
var temp = doSum(2);
sum += temp(8);
console.log(sum);
