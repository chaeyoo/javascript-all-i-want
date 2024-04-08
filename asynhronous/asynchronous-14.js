function getData() {
    return fetch(`https://jsonplaceholder.typicode.com/posts/1`)
}

const loadDataAwait = async () => {
    const result = await getData();
    const data = await result.json();
    console.log(data);
}

loadDataAwait();
