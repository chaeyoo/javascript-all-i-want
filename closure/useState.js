// 클로저는 함수가 선언될 때의 환경을 기억, 이를 통해 함수가 자신의 외부 스코프에 있는 
// 변수에 접근 가능하도록 함 
// 이러한 특성을 이용해 상태를 유지하고 업데이트 하는 useState hook

function createUseState() {
    let state;
    // 클로저를 통해 참조중인 state 변수의 상태를 변화 시키고 그 이후 렌더링
    function setState(newState) {
        state = newState;
        render();
    }
    function useState(initialState) {
        state = state === undefined ? initialState : state;
        return [state, setState];
    }
    // useState 를 반환하므로 클로저가 형성됨.
    // closure에 의해 state 계속 참조할 수 있음
    return useState;
}

// 함수 컴포넌트가 클로저를 사용하여 상태를 관리하는 기본적인 아이디어 확인용!

