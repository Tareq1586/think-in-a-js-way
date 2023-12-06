// symbol is always a unique identifier
// var symbol1 = Symbol('I am symbol 1'); // symbol with description
// var symbol2 = Symbol('I am symbol 2');
// console.log(symbol1);
// console.log(symbol2);
// console.log(symbol1 === symbol2);

// object represenaion of a  primitive value
// var cricketer = new String('Sakib');
// console.log(cricketer);

// symbol has no string representation
// var person = new Symbol();
// console.log(person);

// symbol is an unique identifier
// var name1 = Symbol('name1');
// var name2 = Symbol('name2');
// console.log(name1 == name2);

// symbol with same identity
// var symbol1 = Symbol.for('name');
// var symbol2 = Symbol.for('name');
// console.log(symbol1 == symbol2);

// we can use the value of a variable as a property of object
// var test = 'testtest';
// var object = {
//   name: 'Sakib',
//   [test]: 'test',
// };
// console.dir(object);

// now we can use symbol as a property of an object
// var cricket = Symbol.for('This is cricket symbol');
// var object = {
//   name: 'Sakib',
//   [cricket]: 'Bangladesh',
// };
// console.log(object);

// adding a symbol property in an object directly
// var object = {};
// object.name = 'JavaScript';
// object['estd'] = '1995';
// object[Symbol('founder')] = 'Brendan Eich';
// console.log(object);

// iterate throw an object
// var object = {};
// object.name = 'JavaScript';
// object['estd'] = '1995';
// object[Symbol('founder')] = 'Brendan Eich';
// for (let key in object) {
//   console.log(key);
// }

// showing keys of an object
// var object = {};
// object.name = 'JavaScript';
// object['estd'] = '1995';
// object[Symbol('founder')] = 'Brendan Eich';
// console.log(Object.keys(object));

// array.prototype object
// console.log(Array.prototype);

// an includes property is inherited from it's prototype
// var myArray = [1, 2, 3];
// console.log(myArray.includes(2));
// console.log(myArray['includes'](2));

// overriding includes method with our own includes method
// var includes = Symbol('My own array includes method');
// Array.prototype[includes] = () => {
//   console.log('This is my array includes function');
// };
// var myArray = [1, 2, 3];
// console.log(myArray.includes(2));
// console.log(myArray['includes'](2));
// myArray[includes](2);

// var title = 'JavaScript';
// console.log(title.search('Script'));

// console.dir(String);

// var title = 'JavaScript';
// console.log(title.search(/Script/));

// practice
// var laptopp = new String('laptop');

// implement a symbol
// class Product {
//   constructor(title) {
//     this.title = title;
//   }

//   [Symbol.search](string) {
//     return string.indexOf(this.title) >= 0 ? 'found' : 'not found';
//   }
// }
// console.log('javascript'.search('script'));
// var laptop = new Product('laptop');
// var laptop = 'laptop';
// console.log('HP aptop'.search(laptop));

// symbol can not be deleted
// function myFunction() {
//   const PVT = Symbol('My private value');
//   return {
//     set(obj) {
//       obj[PVT] = true;
//     },
//     get(obj) {
//       return obj[PVT];
//     },
//   };
// }
// const value = myFunction();
// const obj = {
//   a: 1,
//   b: 2,
// };
// value.set(obj);
// console.log(value.get(obj));
// console.log(obj);
// // symbol can not be deleted
// delete obj['Symbol(My private value)'];
// console.log(obj);

// deleting a property of an object
// const p = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// delete p.a;
// delete p['c'];
// console.log(p);
