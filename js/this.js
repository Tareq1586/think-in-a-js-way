// implicit binding
// explicit binding
// new binding
// window binding

// implicit binding
// var sakib = {
//   name: 'Sakib',
//   age: 35,
//   printPlayerName() {
//     console.log(`Player name is: ${this.name}`);
//   },
// };
// sakib.printPlayerName();

// implicit binding 2
// var printPlayerNameFunction = function (obj) {
//   obj.printPlayerName = function () {
//     console.log(this.name);
//   };
// };
// var sakib = {
//   name: 'Sakib',
//   age: 35,
// };
// var tamim = {
//   name: 'Tamim',
//   age: 35,
// };
// printPlayerNameFunction(sakib);
// sakib.printPlayerName();

// var Person = function (name, age) {
//   return {
//     name,
//     age,
//     printName() {
//       console.log(this.name);
//     },
//     father: {
//       name: 'Mr. XXX',
//       printName() {
//         console.log(this.name);
//       },
//     },
//   };
// };
// var sakib = Person('Sakib', 35);
// sakib.printName();
// sakib.father.printName();

// explicit binding
// call()
// var printName = function () {
//   console.log(`The player name is: ${this.name}`);
// };
// var sakib = {
//   name: 'Sakib',
//   age: 35,
// };
// printName.call(sakib);

// call() with parameter
// var printName = function (v1, v2, v3) {
//     console.log(`${this.name} is ${v1}, ${v2} & ${v3}`);
//   };
//   var sakib = {
//     name: 'Sakib',
//     age: 35,
//   };
//   var v1 = 'handsoome';
//   var v2 = 'all-rounder';
//   var v3 = 'best player';
//   printName.call(sakib, v1, v2, v3);

// apply()
// var printName = function (v1, v2, v3) {
//   console.log(`${this.name} is ${v1}, ${v2} & ${v3}`);
// };
// var sakib = {
//   name: 'Sakib',
//   age: 35,
// };
// var v1 = 'handsome';
// var v2 = 'all-rounder';
// var v3 = 'politician';
// var v = [v1, v2, v3];
// printName.apply(sakib, v);

// bind()
// var printName = function (v1, v2, v3) {
//   console.log(`${this.name} is ${v1}, ${v2} & ${v3}`);
// };
// var sakib = {
//   name: 'Sakib',
//   age: 35,
// };
// var v1 = 'handsome';
// var v2 = 'all-rounder';
// var v3 = 'politician';
// const myFunc = printName.bind(sakib, v1, v2, v3);
// myFunc();

// new binding
// function Person(name, age) {
//     // const this = Object.create(null);
//   this.name = name;
//   this.age = age;
// // return this;
// }
// var sakib = new Person('Sakib', 35);
// console.log(sakib);

// window binding
// var printName = function () {
//   console.log(this);
// };
// var sakib = {
//   name: 'Sakib',
//   age: 35,
// };
// printName();

// using strict
// "use strict";
// var printName = function () {
//   console.log(this);
// };
// var sakib = {
//   name: 'Sakib',
//   age: 35,
// };
// printName();



