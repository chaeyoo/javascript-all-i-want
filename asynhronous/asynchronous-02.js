function fetchData(callback) {
    setTimeout(() => {
        const data = ' 채형입니다.';
        callback(data);
    }, 0)

}

fetchData((data) => {
    console.log('안녕하세요.', data)
});

