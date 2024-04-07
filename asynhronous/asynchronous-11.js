
function fetchData(id) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((response) => {
            return response.json()
        })
}

fetchData(1)
    .then(data => { console.log('Fetched data1', data); return fetchData(2); })
    .then(data => { console.log('Fetched data2', data); return fetchData(3); })
    .then(data => { console.log('Fetched data3', data); })
    .catch(error => { console.error('Error 발생', error); })