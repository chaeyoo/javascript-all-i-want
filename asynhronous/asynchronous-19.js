function execute() {
    const promises = [
        new Promise((resolve, reject) => { console.log('Success Promise1'); resolve('sucess') }),
        new Promise((resolve, reject) => { console.log('Success Promise2'); resolve('sucess') }),
        new Promise((resolve, reject) => { console.log('Success Promise3'); resolve('sucess') }),
    ]
    return Promise.all(promises);
};

async function main() {
    try {
        await execute();
    } catch (error) {
        console.log('error: ', error)
    }
}

main(); 
