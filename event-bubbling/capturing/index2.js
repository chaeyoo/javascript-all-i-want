// 로그인을 한 사용자만 버튼을 클릭할 수 있게 하고 로그인을 하지 않은 사람은
// 로그인을 하라는 alert을 띄우는 캡처링을 구현
// 캡처링은 상위 요소 부터 하위요소로 이동
// 버튼을 감싸는 parent div에 이벤트 리스너 할당
// isUserLoggedIn을 만들어서 false일 때 alert 띄우는 걸 캡쳐링으로 구현



let isUserLoggedIn = false;
document.getElementById("parentDiv").addEventListener('click', function (event) {
    if (!isUserLoggedIn) {
        alert('로그인을 먼저 해주세요.');
        event.stopPropagation();
    }
}, false)

document.getElementById("childButton").addEventListener('click',
    function () {
        alert('Button Clicked');
    }
)

