new Promise((resolve, reject) => {
    reject('error code 1');
}).catch(error => {
    console.log('Caught an error: ', error);
})