function fetchData() {
    setTimeout(() => {
        const data = '비동기 데이터';
        console.log(data);
    }, 0)

}

fetchData();
console.log('콘솔 로그 실행');
