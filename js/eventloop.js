// when we have to understand event loop
// const second = () => console.log('This is second function');
// const third = () => console.log('This is third function');
// const first = () => {
//   console.log('This is first function');
//   setTimeout(second, 0);
//   third();
// };
// first();

// why a loop slows down an execution
// introducing render queue
// function process(num) {
//   console.log(num);
// }
// [1, 2, 3, 4, 5].forEach((i) => {
//   process(i);
// });

// inrtroducing microtask queue
// const second = () => console.log('This is second function');
// const third = () => console.log('This is third function');
// const first = () => {
//   console.log('This is first function');
//   setTimeout(second, 0);
//   new Promise((resolve, reject) => {
//     resolve('blah');
//   }).then((value) => {
//     console.log(value);
//   });
//   third();
// };
// first();
