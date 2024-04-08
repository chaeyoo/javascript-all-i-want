function getData() {
    return fetch(`https://jsonplaceholder.typicode.com/posts/1`)
}

const loadDataPromise = () => {
    getData()
    .then(res => res.json())
    .then(data => console.log(data))
}

loadDataPromise();