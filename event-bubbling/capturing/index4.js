// 모달 배경을 클릭했을 때 모달이 닫히도록
// 모달 내부의 컨텐츠를 클릭했을 때는 닫히지 않도록
document.getElementById('modalBackground')
.addEventListener('click', function() {
    this.style.display = 'none';
})

// 모달 내부 버튼을 클릭 했을때 닫힘

document.getElementById('modalContent')
.addEventListener('click', function (event) {
    event.stopPropagation();
})