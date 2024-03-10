// 객체 메서드로 클로저 구현
function createCounter() {
    let count = 0;
    // return으로 함수가 아닌 객체 리터럴 선언
    return {
        increment: function () {
            count += 1;
            return count;
        },
        getCurrentCount: function () {
            return count;
        }
    }
}

// myCounter 객체는 독립적인 count 값을 유지
const myCounter = createCounter();
myCounter.increment();
myCounter.increment();

console.log(myCounter.getCurrentCount());

// increment 메서드와 getCurrentCount 메서드는
// createCounter의 지역변수인 count에 접근
// 두 메서드는 클로저를 형성하여 createCounter 함수의 실행 컨텍스트가 종료된 후에도 count 변수에 계속 접근 가능
// 내부 함수가 객체 형태로 외부에 노출되고 외부함수의 변수에 접근하면 클로저 형성
// 클로저를 사용해서 각 createCounter 함수 호출이 독립적인 count 상태를 유지할 수 있음
//각 myCounter 객체는 자신만의 count 값을 가지며 이는 다른 count 객체와 독립적

// myCounter와는 독립적인 인스턴스
const myCounter2 = createCounter();
myCounter2.increment();
myCounter2.increment();

console.log(myCounter2.getCurrentCount());
// 독립적으로 작동

// 클로저의 형성은 변수를 은닉하고 상태를 유지하는데 매우 중요


// 클로저 사용 시 유의사항
// 외부함수가 종료된 후에도 메모리에 남아서 과도한 사용시 메모리 누수를 일으킴

// 코드 복잡성 증가
