Promise.all([
    new Promise(resolve => setTimeout(() => resolve('Promise1 완료'), 3000)),
    new Promise(resolve => setTimeout(() => resolve('Promise2 완료'), 2000)),
    new Promise(resolve => setTimeout(() => resolve('Promise3 완료'), 1000)),
]).then(console.log)