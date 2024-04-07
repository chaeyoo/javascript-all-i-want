
function fetchData() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
        return response.json()
    })
}

fetchData()
    .then(data => {
        console.log('Fetched data', data);
    })
    .catch(error => {
        console.error('Error 발생', error);
    })