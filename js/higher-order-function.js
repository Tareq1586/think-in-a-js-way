// we can put a property inside a function
// function hello() {
//   console.log('Hello World!');
// }
// hello.language = 'JavaScript';
// console.log(hello.language);

// also we can put a function inside a function
// function hello() {
//   return function () {
//     console.log('Hello World');
//   };
// }
// hello()();

// var a = function hello() {
//   console.log('Hello Woorld');
// };
// console.dir(a);
// var str = {
//   name: 'Bangladesh',
// };
// console.dir(str);

// multiply each array element by 2 and  form a new array
// Without higher order function
// var numbers = [1, 2, 3];
// var result = [];
// for (let i = 0; i < numbers.length; i++) {
//   result.push(numbers[i] * 2);
// }
// console.log(result);

// With higher order function
// var numbers = [1, 2, 3];
// var result = numbers.map((number) => number * 2);
// console.log(result);

// Without higher-order function
// var players = [
//   {
//     name: 'Sakib',
//     avg: 38,
//   },
//   {
//     name: 'Tamim',
//     avg: 36,
//   },
//   {
//     name: 'Mahmudullah',
//     avg: 27,
//   },
// ];
// const playerWithThirtySevenAvg = [];
// for (let i = 0; i < players.length; i++) {
//   if (players[i].avg >= 37) {
//     playerWithThirtySevenAvg.push(players[i]);
//   }
// }
// console.log(playerWithThirtySevenAvg);

// With higher-order function
// const playerWithThirtySevenAvg = players.filter((number) => number.avg > 37);
// console.log(playerWithThirtySevenAvg);

// My own higher-order function
// const language = ['JavaScript', 'Python', 'PHP', 'C'];
// function mapSumit(arr, fn) {
//   const newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArray.push(fn(arr[i]));
//   }
//   return newArray;
// }
// const myArray = mapSumit(language, (language) => language.length);
// console.log(myArray);
