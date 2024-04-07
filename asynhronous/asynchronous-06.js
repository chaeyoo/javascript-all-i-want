const XMLHttpRequest = require('xhr2');
const xhr = new XMLHttpRequest();
function fetchData() {
    return new Promise((resolve, reject) => {
        xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                reject(new Error("Failed to load: " + xhr.statusText));
            }
        }

        xhr.send();
    })
}

fetchData()
    .then(data => {
        console.log('Fetched data', data);
    })
    .catch(error => {
        console.error('Error 발생', error);
    })