
document.getElementById('div1').addEventListener('click', function () {
    alert('DIV1 Clicked!');
});

document.getElementById('div2').addEventListener('click', function () {
    alert('DIV2 Clicked!');
});

// 버튼의 이벤트 전파 방지
document.getElementById('btn').addEventListener('click', function (event) {
    alert('Button Clicked!');
    event.stopPropagation();
});



