function loadData() {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const container = document.getElementById('demo');
    container.innerHTML = xhr.responseText;
  };
  xhr.open('GET', '../data/data.txt');
  xhr.send();
}
