// If we do not use asynchronous function, the execution will stop untill timeout
// function processOrder(customer) {
//   console.log(`Processing order for ${customer}`);
//   const currentTime = new Date().getTime();
//   while (currentTime + 3000 >= new Date().getTime());
//   console.log(`Order processed for ${customer}`);
// }
// console.log('Taking order for Kashim');
// processOrder('Kashim');
// console.log('Completed order for Kashim');

// solving the problem with callback
// I can pass a parameter with callback
// function takeOrder(customer, callback) {
//   console.log(`Taking order for ${customer}`);
//   callback();
// }
// function processOrder(customer, callback) {
//   console.log(`Processing order for ${customer}`);
//   setTimeout(() => {
//     console.log('Cooking completed');
//     console.log(`Order processed for ${customer}`);
//     callback(customer);
//   }, 2000);
// }
// function completeOrder(customer) {
//   console.log(`Order completed for ${customer}`);
// }
// takeOrder('Alim', () => {
//   processOrder('Alim', (customer) => {
//     completeOrder(customer);
//   });
// });
// console.log('Hello');

// promise example
// const hasMeeting = true;
// const meeting = new Promise((resolve, reject) => {
//   if (!hasMeeting) {
//     const meetingDettails = {
//       name: 'Open meeting',
//       place: 'RRFM',
//       time: '10 PM',
//     };
//     resolve(meetingDettails);
//   } else {
//     reject(new Error('There is already a meeting'));
//   }
// });
// const addToCalender = (meetingDetails) => {
// const calender = new Promise((resolve) => {
//   resolve(`${meetingDetails.name} will be held in ${meetingDetails.place} at ${meetingDetails.time}`);
// });
// return calender;
//   const calender = `${meetingDetails.name} will be held in ${meetingDetails.place} at ${meetingDetails.time}`;
//   return Promise.resolve(calender);
// };
// meeting
//   .then((res) => {
//     console.log(JSON.stringify(res));
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });
// after adding  add to calender function
// meeting
//   .then(addToCalender)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// using async-await
// async function myMeeting() {
//   return 'Hello';
// }
// console.log(myMeeting());
// async function myMeeting() {
//   try {
//     const meetingDetails = await meeting;
//     const calendar = await addToCalender(meetingDetails);
//     console.log(calendar);
//   } catch {
//     console.log('something went wrong');
//   }
// }
// myMeeting();

// async func basic
// function friendlyFunction() {
//   return Promise.resolve('hello');
// }
// console.log(friendlyFunction());

// more promise object method
// const promise1 = Promise.resolve('promise 1 resolved');
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('promise 2 resolved');
//   }, 2000);
// });
// promise1.then((val) => { console.log(val); });
// promise2.then((val) => { console.log(val); });
// Promise.all([promise1, promise2])
//   .then((val) => {
//     console.log(val);
//   });
// Promise.race([promise1, promise2])
//   .then((val) => {
//     console.log(val);
//   });
// console.log('Hello World!');

