// 함수반환으로 클로저 구현
// 함수 안에서 다른 함수를 반환 함으로써 생성됨
// 내부함수는 외부함수의 변수에 접근할 수 있게 되면서 클로저 탄생
function createCounter() {
    let count = 0;
    // 익명함수가 closure
    // closure 덕분에 count 변수는 상태를 유지하고
    // 익명함수 내부에서 createCounter의 지역변수인 count에 접근 가능
    return function() {
        count += 1;
        return count;
    }
}

const myCounter = createCounter();
// myCounter 함수는 closure 호출
// closure을 통해 createCounter 함수 내부의
// count 변수가 myCounter 함수 호출 사이에 상태를 유지
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());

// closure는 외부함수에서 선언된 변수들을 기억하고 이 변수들이 외부함수가 종료된 후에도 접근 가능
// createCounter가 반환하는 내부 함수가 바로 클로져
// 클로져는 count 변수에 접근하여 +1 씩 증가
// 이때 count 변수는 자유변수에서 닫힌 변수로 변환
// 클로저에 의해 열린 람다식에서 닫힌 람다식으로 변환

// count는 createCounter함수의 지역변수로
// 일반적으로는 함수의 실행 컨텍스트가 종료되면 더이상 접근할 수 없는데, 그러나 createCounter함수가 내부함수를 반환하면 이 내부함수는 count 변수에 대한 참조 유지
// 그, 결과 count  변수는 클로저에 의헤 capture 된 변수가 되며, 가비지 컬렉터에 의해 수집되지 않음

// createCounter 함수의 호출이 끝난 후에도 내부 함수를 통해 count 변수에 계속해서 접근하고 업데이트 가능

// 콜백함수로 클로져 구현
// 클로저는 내부함수가 외부함수의 변수에 접근할 수 있게 하는 기능
// 내부함수를 리턴하면 클로저가 생성됨
// 리턴하는 내부함수는 콜백함수 형태로도 전달될 수 있음


