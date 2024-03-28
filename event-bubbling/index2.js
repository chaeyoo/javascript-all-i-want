//event 객체의 targetid를 검사해서 클릭요소의 target id일때만 alert이 노출되도록 변경
document.getElementById('div2').addEventListener('click', function (event) {
    if (event.target.id === 'div2') {
        alert('DIV2 Clicked!');
    }

});

document.getElementById('div1').addEventListener('click', function (event) {
    if (event.target.id === 'div1') {
        alert('DIV1 Clicked!');
    }
});

document.getElementById('btn').addEventListener('click', function (event) {
    if (event.target.id === 'btn') {
        alert('Button Clicked!');
    }
});