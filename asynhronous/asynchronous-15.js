function getData() {
    return fetch(`https://jsonplaceholder.typicode.com/post/1`)
}

const loadDataPromise = () => {
    getData()
        .then(res => {
            if (!res.ok) {
                throw new Error(`HTTP Error! status : ${res.status}`)
            }
            return res.json();
        })
        .then(data => console.log(data))
        .catch(error => {
            console.error(`Error fetching data: `, error)
        })
}

loadDataPromise();