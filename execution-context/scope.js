// 실행 컨텍스트로 스코프를 설명하기
let globalLet = 'Hello World';

function outer() {
    let localLet = '지역 변수';
    console.log(globalLet);
    console.log(localLet);
}

outer();

// outer 함수 내에서 globalLet 전역변수에 어떻게 접근 하였을까?
// 실행 컨텍스트의 스코프 체인 덕분이다.

const outerContext = {
    'outer 컨텍스트': {
        'VariableEnvironment': {
            localLet: "지역변수"
        },
        'scopeChain': ['outer 변수객체', '전역 변수객체']
    }
}

// 함수가 호출이 되면 자바스크립트 엔진은 해당 함수에 대한 새로운 실행 컨텍스트를 생성, outer 함수가 실행될 때 outer 컨텍스트가 실행이 된다. 변수 객체에는 localLet이 선언이 된다. scopeChain 속성이 추가 되어서 자기 자신의 변수 객체와 전역 변수 객체를 참조한다. 스코프 체인은 현재 함수의 스코프 뿐만 아니라 외부 함수의 스코프도 포함한다. 함수 내에서 변수를 참조할 때 자바스크립트 엔진은 outer 함수의 지역변수 객체에서 해당 변수를 찾고 없으면 스코프 체인을 따라 상위 스코프로 가서 찾게 된다.

// 스코프 체인과 실행 컨텍스트는 함수가 자신의 지역 변수 뿐 아니라 전역 변수에도 접근할 수 있도록 한다. 

