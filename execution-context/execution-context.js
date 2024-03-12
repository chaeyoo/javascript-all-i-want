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


// 정리)
/* 실행 컨텍스트는 코드가 실행되는 환경이나 상태
실행 컨텍스트는 변수 환경, this, scope chain으로 이루어져 있음
- 변수 환경: 함수 또는 전역 코드 내에서 선언된 변수와 함수 선언을 포함되며 환경은 코드 실행 동안 지속적으로 갱신 된다. 
 
실행 컨텍스트는 this의 값을 결정함. this는 함수가 어떻게 호출되었는지에 따라 다르게 결정된다.

실행 컨텍스트는 하위 스코프 체인을 형성한다. 현재 컨텍스트의 변수 환경과 상위 변수 환경을 연결한다.

실행 컨텍스트는 함수가 호출될 때마다 형성되고 콜스택에 쌓이게 된다.

전역 실행 컨텍스트는 프로그램이 시작될 때 형성되고 전역 함수와 변수를 관리한다.

실행 컨텍스트의 스코프 체인은 클로저의 구현과 밀접한 관련이 있다.
클로저는 내부 함수가 외부함수의 실행 컨텍스트에 대한 참조를 유지할 때 발생한다. 이 참조는 내부 함수가 외부함수의 변수와 함수에 접근할 수 있게 한다. 

실행 컨텍스트의 핵심 구성 중 하나는 LexicalEnvironment = EnvironmentRecord + OuterLexiclaEnvironment
- EnvironmentRecord: 현재 컨텍스트 내의 식별자와 변수, 함수 선언을 저장 
- OuterLexiclaEnvironment: 상위 컨텍스트의 LexicalEnvironment를 참조한다. 이 참조 덕분에 함수는 상위 스코프 변수에 접근할 수 있고 이는 함수 스코프와 클로저 구현에 필수적인 요소이다.*/