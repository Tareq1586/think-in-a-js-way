// var a = 5;
// var b = a;
// a = 6;
// console.log(a);
// console.log(b);

// for reference type
// var a = {
//   name: 'Tareq',
// };
// var b = a;
// a.name = 'Sumit';
// console.log(a);
// console.log(b);

// for array
// change/mutate
// var a = ['Sakib', 'Tamim'];
// var b = a;
// a.push('Mahmudullah');
// console.log(a);
// console.log(b);

// reassign
// var a = ['Sakib', 'Tamim'];
// var b = a;
// a.push('Mahmudullah'); // change/mutate
// a = [];
// console.log(a);
// console.log(b);

// copy immutably
// var language = {
//   name: 'JavaScript',
//   estd: 1985,
// };
// var language2 = { ...language };
// language.founder = 'Brendan Eich';
// console.log(language);
// console.log(language2);

// when immutably doesn't work perfectly
// nested reference type
// var language = {
//   name: 'JavaScript',
//   estd: 1985,
//   libraries: ['React', 'Vue'],
// };
// var language2 = { ...language };
// language.libraries.push('Angular');
// console.log(language);
// console.log(language2);

// do immutably with lodash
// var language = {
//   name: 'JavaScript',
//   estd: 1985,
//   libraries: ['React', 'Vue'],
// };
// var language2 = _.cloneDeep(language);
// language.libraries.push('Angular');
// console.log(language);
// console.log(language2);

// string,number,boolean have their own object represenation
// wrapper type
// var a = 'Sakib';
// console.log(a);
// var b = new String('Sakib'); // wrapper type
// console.log(b);

// accessing methods
// var a = 'Sakib';
// console.log(a.charAt(2));
// var b = new String('Sakib'); // wrapper type
// console.log(b.charAt(2));

// primitive can be accessed as an object
// var a = 'Sakib';
// a.test = 'Tamim';
// console.log(a);

// pass by reference/value?
// var a = 1;
// var change = (val) => {
//   val = 2;
// };
// change(a); // looks like passed by value
// console.log(a);

// parameter is always  passed by reference
// var a = {
//   name: 'Tareq',
// };
// var change = (val) => {
//   val = {}; // assignment
// };
// change(a);
// console.log(a);

// mutate
// so parameter is always passed by reference
// var a = {
//   name: 'Tareq',
// };
// var change = (val) => {
//   val.name = 'Sakib'; // mutate
// };
// change(a);
// console.log(a);

// so parameter is always passed by reference whether it is object type or not
// var num = 1;
// var change = (val) => {
//   val += 1;
// };
// change(num);
// console.log(num);
