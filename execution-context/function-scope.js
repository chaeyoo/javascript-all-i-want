const a = 1;
const outer = () => {
    // 전역변수 a에 접근
    console.log('a: ', a);
}

outer();


// 함수 스코프가 형성되는 방식은  LexicalEnvironment와 그 안에 있는 OuterLexicalEnvironment 때문이다. OuterLexicalEnvironment는 outer 함수의 외부 환경 (전역환경의) LexicalEnvironment를 참조한다. 

// outer 함수 내에서 변수 a를 참조하려고 할 때 outer함수의 내부 EnvironmentRecord에서 먼저 변수 a를 찾는다. 없다면 OuterLexicalEnvironment를 통해 상위 스코프의 전역 환경에서 a를 찾게 된다. 

// 함수 내에서 자신의 스코프 뿐 아니라 상위 스코프의 변수에 접근할 수 있게 되고 클로저가 가능하게 된다.

