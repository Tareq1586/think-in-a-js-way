const makeRequest = (method, url, data) => new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function () {
    let data = xhr.response;
    resolve(JSON.parse(data));
  };
  xhr.onerror = () => {
    reject('There is an error');
  };
  xhr.send(JSON.stringify(data));
});

const getData = () => {
  makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
    .then((val) => {
      console.log(val);
    })
    .catch((error) => {
      console.log(error);
    });
};
const sendData = () => {
  makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts', {
    title: 'foo',
    body: 'bar',
    userId: 1,
  })
    .then((value) => {
      console.log(value);
    });
};
const updateData = () => {
  makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
    id: 1,
    title: 'fooMA',
    body: 'bar',
    userId: 1,
  });
};
const updateSingleData = () => {
  makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', { title: 'foona' });
};
const deleteData = () => {
  makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1');
};
getData();
// sendData();
// updateData();
// updateSingleData();
// deleteData();
