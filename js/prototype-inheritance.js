// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype = {
//   eat() {
//     console.log(`${this.name} is eating`);
//   },
// };
// const sakib = new Person('Sakib', 35);
// sakib.eat();

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.eat = function () {
//     console.log(`${this.name} is eating`);
//   };
// }
// Person.prototype = {
//   eat() {
//     console.log(`${this.name} is eating`);
//   },
// };
// var sakib = new Person('Sakib', 35);
// console.dir(sakib);
// var tamim = new Person('Tamim', 36);
// console.dir(tamim);

// var f = function Person() {

// };
// console.dir(f);

// Object.prototype.sumit = function () {
//   console.log('I am Sumit');
// };
// var p = {};
// p.sumit();

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.prototype = {
//   eat() {
//     console.log(`${this.name} is eating`);
//   },
// };
// function Cricketer(name, age, type, country) {
//   Person.call(this);
//   this.name = name;
//   this.age = age;
//   this.type = type;
//   this.country = country;
// }
// Cricketer.prototype = Object.create(Person.prototype);
// Cricketer.prototype.constructor = Cricketer;
// const sakib = new Cricketer('Sakib', 35, 'All-rounder', 'Bangladesh');
// console.dir(Cricketer.prototype);
// sakib.eat();

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   eat() {
//     console.log(`${this.name} is eating`);
//   }
// }
// class Cricketer extends Person {
//   constructor(name, age, type, country) {
//     super(name, age);
//     this.name = name;
//     this.age = age;
//     this.type = type;
//     this.country = country;
//   }
// }
// const sakib = new Cricketer('Sakib', 35, 'All-rounder', 'Bangladesh');
// sakib.eat();

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   eat() {
//     console.log(`${this.name} is eating`);
//   }

//   get getName() {
//     return 'Sumit';
//   }

//   set setName(name) {
//     this.name = name;
//   }

//   static isEqualAge(cricketer1, cricketer2) {
//     // return cricketer1.age === cricketer2.age;
//     return this.name;
//   }
// }
// class Cricketer extends Person {
//   constructor(name, age, type, country) {
//     super(name, age);
//     this.name = name;
//     this.age = age;
//     this.type = type;
//     this.country = country;
//   }

//   eat() {
//     super.eat();
//     console.log(`${this.name} is eatting now`);
//   }
// }
// const sakib = new Person('Sakib', 35);
// const tamim = new Person('Tamim', 36);
// console.log(sakib.getName);
// sakib.setName = 'Tamim';
// console.log(sakib.name);
// console.log(Person.isEqualAge());
// const miraz = new Cricketer('Miraz', 30);
// miraz.eat();
