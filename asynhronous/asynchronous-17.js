const getAuthorName = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((post) => post.userId)
        .then((userId) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                .then((response) => response.json())
                .then((user) => user.name)
        })
        .catch(error => console.log('error', error));
}

getAuthorName(1).then((name) => console.log("name: ", name));