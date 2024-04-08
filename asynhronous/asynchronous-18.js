const getAuthorName = async (id) => {

    try {
        const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const post = await postResponse.json();
        const userId = post.userId;

        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const user = await userResponse.json();
        const userName = user.name;

        console.log("name: ", userName);
    } catch (error) {
        console.log("error", error)
    }

}

getAuthorName(1);