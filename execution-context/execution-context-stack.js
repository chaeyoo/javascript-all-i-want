// 함수 호출과 실행 컨텍스트 스택
// 실행 컨텍스트를 구성하는 방법은 함수를 실행하는 것
// 여러 함수가 실행될 때 실행 컨텍스트가 관리되는 방식

let globalVar = '전역 변수';
function outer() {
    console.log(globalVar);
    function inner() {
        var innerVar = '내부 함수 변수';
        console.log(innerVar);
    }
    inner();
}
outer();

// outer 함수 호출 -> outer 함수의 실행 컨텍스트가 생성되어 호출 스택에 push -> 그 안에서 inner 함수 호출 -> inner 함수의 실행 컨텍스트가 생성되어 스택에 추가 -> inner 함수가 실행 완료되고 return 이 되면 inner 의 실행 컨텍스트는 호출 스택에서 pop 된다. -> outer 함수가 실행 완료되고 return 이 되면 outer 의 실행 컨텍스트는 호출 스택에서 pop 된다. 

// 함수의 실행 컨텍스트는 함수가 실행 완료 되면 호출 스택에서 제거가 된다. 하지만 글로벌 실행 컨텍스트는 프로그램이 종료될 때까지 호출 스택에 남아있어 전역 환경 유지

// 자바스크립트 프로그램이 실행될 때 가장 먼저 글로벌 실행 컨텍스트가 생성된다. 이 컨텍스트는 호출 스택의 가장 바닥에 위치하고 프로그램 실행 전체 기간 동안 유지
// 전역 함수의 변수와 함수를 관리하고 전역 환경을 설정함

 