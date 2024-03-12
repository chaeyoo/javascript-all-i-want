// 실행 컨텍스트 관점에서 클로저가 실행되는 원리

const outer = function () {
    let a = 1;
    const inner = function () {
        return ++a;
    }
    return inner;
}

// outer 함수가 호출될 때 클로저 생성을 위해 inner 를 만들고, inner 함수 내부에서 외부함수의 변수 a를 참조하고 inner를 리턴

// outer 함수를 count 변수에 할당

const count = outer();
console.log(count()); // 2
console.log(count()); // 3

// 실행 컨텍스트 관점에서 코드 설명
// 함수가 호출될 때마다 콜스택에 쌓인다.a
// outer 함수가 호출되면 콜스택에 먼저 쌓이고, outer 함수 내부에서 inner 함수가 호출되면, inner 함수도 콜스택에 쌓인다.

// 각 함수가 실행을 마치면 콜스택에서 제거된다. 일반적으로 함수가 실행되면, 그 함수의 실행 컨텍스트가 콜스택에 쌓이고 실행이 끝나면 콜스택에서 제거가 된다. 그 때 함수 내부의 지역변수는 일반적으로 사라지지만, 이 예제에서는 클로저 때문에 outer 함수가 종료되고, 콜스택에서 제거가 되더라도 inner 함수는 여전히 변수 a에 접근 가능하다.a


// 내부 구현 원리는 >> 활성 객체 (Activation Object)

// LexicalEnvironment를 통해 Activation Object 구현한다. LexicalEnvironment는 실행 컨텍스트와 관련된 스코프와 식별자에 대한 정보를 저장한다.
// 클로저가 생성될 때 내부함수는 외부함수의 LexicalEnvironment에 대한 참조를 유지한다. 이를 통해 외부함수가 실행을 마치고 컨텍스트가 종료된 이후에도 외부함수의 변수에 접근 가능한다. 상세 이유는 LexicalEnvironment는 Environment Record와 외부 렉시컬 환경 참조 (Outer Lexical Environment Reference)로 구성이 되어있다. 이 두개 중에 외부 렉시컬 환경 참조 때문에 가능하다. 클로저는 내부 함수가 자신이 선언된 시점의 렉시컬 환경을 기억하는 현상이다. 함수가 선언이 되고 내부 함수의 렉시컬 환경은 외부 함수의 렉시컬 환경을 외부 렉시컬 환경 참조로 포함한다. 이것이 내부함수가 외부함수의 변수에 접근할 수 있게 한다. 외부함수가 실행을 마치고 종료된 이후에도 내부함수는 외부함수의 렉시컬 환경에 대한 참조를 유지하여 외부함수의 변수에 계속 접근할 수 있게되고 이러한 상태는 클로저를 형성한다.


// outer 함수의 LexicalEnvironment
const outerExecutionContext = {
    "outer 함수의 LexicalEnvironment": {
        EnvironmentRecord: {
            a: 1,
            inner: "/* inner 함수의 참조 */ "
        },
        OuterLexicalEnvironment: "/* 전역 환경의 LexicalEnvironment 참조*/"
    }
}

// lexical environment는 함수가 실행될 때 해당 함수의 스코프와 관련된 정보를 담고있음.
// lexical environment는 두 가지 구성요소로 이루어져 있다. EnvironmentRecord와 OuterLexicalEnvironment이다. EnvironmentRecord는 함수 내에서 선언된 변수, 함수 선언, 매개 변수를 저장하며 함수가 실행되는 동안 사용된다. OuterLexicalEnvironment는 현재 함수의 외부 또는 부모 스코프에 대한 참조이다. 이 참조를 통해 함수는 자신의 외부 환경, 상위 스코프에 접근 가능하다. 
// outer 함수 내에는 지역변수 a와 내부 함수 inner가 선언되어 있다. 여기서 EnvironmentRecord는 outer의 지역변수 a와 inner 를 포함하고 있다. OuterLexicalEnvironment는 전역 환경의 렉시컬 환경을 참조하여 outer 함수는 전역 변수에 접근 가능하다.  (평소에 사용하던 함수 스코프, 함수 내부에서 전역 변수 사용 가능!)


// inner 함수의 LexicalEnvironment
const innerExecutionContext = {
    "inner 함수의 LexicalEnvironment": {
        EnvironmentRecord: {
            // inner 함수 내부의 지역 변수들이 여기 포함 됩니다. (이 경우 비어 있음)
        },
        OuterLexicalEnvironment: 'outer 함수의 LexicalEnvironment'
    }
}

// inner 함수가 호출되면 inner 의 실행 컨텍스트가 생성이 된다. inner의 실행 컨텍스트에 outer lexical environment는 outer 함수의  lexical environment를 참조한다. 이 때문에 inner 함수가 outer 함수의 변수 a에 접근 가능하다. 이부분에서 클로저가 형성된다. inner의 실행 컨텍스트에 outer lexical environment가 outer 실행 컨텍스트의 lexical environment를 참조하는 것은 inner 함수가 outer 함수의 변수와 환경에 접근할 수 있도록 한다. (클로저의 핵심!)

// 