// callback 함수로 클로저 구현
function createCounter(callback) {
    let count = 0;
    return function () {
        count += 1;
        callback(count);
    }
}

const myCounter = createCounter(function (currentCount) {
    console.log('현재 카운트: ', currentCount);
});

myCounter();

// 클로저와 콜백함수 사용을 통해 상태를 유지하고
// 상태변경 시마다 사용자가 정의한 동작을 수행하는 유연한 방식을 제공 
// createCounter를 사용할 때 callback함수를 인자로 제공
// 이 callback 함수는 createCounter가 반환하는 내부함수에 의해서 호출되며 currentCount 라는 매개변수로 count  값을 받음
// 클로저의 코드를 크게 변경하지 않으면서, 추가적인 기능을 확장