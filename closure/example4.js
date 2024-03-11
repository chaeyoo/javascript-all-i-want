// create logger closure 함수
// 타입을 인자로 받음
// 익명함수 리턴

function createLogger(type) {
    return function (message) {
        // 외부함수의 인자인 type을 익명함수 내부에서 사용해도 closure 형성 된다.
        console.log(`[${type}] ${message}`)
    }
}

const errorLogger = createLogger('ERROR');
const infoLogger = createLogger('INFO');
const warningLogger = createLogger('WARNING');

// 각각 Logger 함수에서 반환된 클로저는 각각 타입의 값을 기억함
// 각 logger 함수를 호출할 때 이 함수들은 기억된 타입 값을 사용하여 적절한 로그메시지 출력
errorLogger('이것은 에러 메시지 입니다.');
infoLogger('이것은 정보 메시지 입니다.');
warningLogger('이것은 경고 메시지 입니다.');


/* 
클로저는 createLogger에 생성된  후에 이를 사용하여 로그를 출력할 수 있게 함
클로저가 외부함수의 변수를 기억하고 나중에 이를 활용
커링함수의 부분적용을 통해 함수의 일부 인자를 미리 설정

createLogger 함수는 로그 유형을 미리 설정하고 생성된 로거 함수는
동일한 인터페이스 유지, 다른 유형의 로그처리를 할 수 있게 함
공통 로깅 기능을 중복없이 여러번 재사용
커링을 사용하면 복잡한 함수를 간결하고 관리하기 쉬운 여러 함수로 분할 가능

createLogger 함수는 로그 유형에 따라 다른 함수를 반환, 이렇게 분할된 함수는 특정 로그 유형에 대한 로직을
캡슐화하며 전체 코드의 가독성과 모듈성 향상
각각의 함수는 명확한 역할을 가지고 이를 통해 코드 유지보수 용이
부분적용을 사용하면 함수 호출시 필요한 매개변수 수를 줄일 수 있음
createLogger 함수는 첨에는 로그의 유형만을 받고 나중엔 실제 로그 메시지를 받는 함수를 반환
이는 함수 호출시 필요한 매개 변수를 단계적으로 제공할 수 있으며 함수 호출이 더 유연해짐
즉, 커링과 부분적용을 사용하면 각 함수가 명확한 목적을 가지고 동작하게 됨
createLogger 함수는 로그 유형을 설정하는 것이 목적
반환된 logger 함수는 실제 로그 메시지를 처리하는 것이 목적
각 함수가  단일 목적을 가지므로써 코드의 명확성과 유지 보수성 향상
*/
