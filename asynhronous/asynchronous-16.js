function getData() {
    return fetch(`https://jsonplaceholder.typicode.com/post/1`)
}

const loadDataAwait = async () => {
    try {
        const result = await getData();
        if (!result.ok) {
            throw new Error(`HTTP Error! status : ${res.status}`)
        }

        const data = await result.json();
        console.log(data);
    } catch (error) {
        console.error(`Error fetching data: `, error.message);
    }

}

loadDataAwait();
