// 전역 실행 컨텍스트
// : js 코드가 실행될 때 생성되는 가장 기본적인 실행 컨텍스트

// 전역 함수와 변수를 포함
// 글로벌 실행 컨텍스트에 대한 예시

let globalLet = 'Hello World';
function globalFunction() {
    return 'Hello Global Function';
}

// 객체 형식으로 글로벌 실행 컨텍스트 구조 표현

globalExcecutionContext = {
    VariableEnvironment :  {
        globalLet: 'Hello World',
        // globalFunction: <function reference>,
    },
    this: window
}

// 위 예시에서 VariableEnvironment는 전역 함수와 변수를 포함하는 객체이다. 이런 방식으로 전역 실행 컨텍스트는 전역 스코프에 선언된 모든 변수와 함수를 관리하고,  자바스크립트 프로그램이 실행될 때 생성된다. VariableEnvironment 실행 컨텍스트 내에서 변수와 함수 선언을 저장하고 이는 해당 컨텍스트에서 선언된 모든 식별자 (ex 변수이름, 함수이름 등 값, 함수 참조)를 포함한다.

// 실행 컨텍스트가 함수 호출에 의해 생성 되었을 경우에는 VariableEnvironment는 해당 함수의 매개변수, 지역변수, 함수 선언 등을 포함한다. 이는 해당 함수의 스코프 내에서 유효한 함수와 변수를 정의한다.
