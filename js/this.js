// implicit binding
// explicit binding
// new binding
// window binding

// var printPlayerName = function (name) {
//   console.log(name);
// };
// var sakib = {
//   name: 'Sakib',
//   age: 35,
//   printPlayerName() {
//     console.log(`Player name is: ${this.name}`);
//   },
// };
// sakib.printPlayerName();

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
// console.log(printPlayerNameFunction);

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

// var printName = function (v1, v2, v3) {
//   console.log(`${this.name} is ${v1}, ${v2} & ${v3}`);
// };
// var sakib = {
//   name: 'Sakib',
//   age: 35,
// };
// var v1 = 'handsoome';
// var v2 = 'all-rounder';
// var v3 = 'best player';
// var v = [v1, v2, v3];
// var myFunc = printName.bind(sakib, v1, v2, v3);
// myFunc();

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// var sakib = new Person('Sakib', 35);
// console.log(sakib);

// var printName = function () {
//   console.log(this);
// };
// var sakib = {
//   name: 'Sakib',
//   age: 35,
// };
// printName();
