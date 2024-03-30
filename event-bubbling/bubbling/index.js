// Button Clicked!' => DIV1 Clicked! => DIV2 Clicked!
// 순서로 alert 노출
document.getElementById('div2').addEventListener('click', function () {
    alert('DIV2 Clicked!');
});

document.getElementById('div1').addEventListener('click', function () {
    alert('DIV1 Clicked!');
});

document.getElementById('btn').addEventListener('click', function () {
    alert('Button Clicked!');
});


