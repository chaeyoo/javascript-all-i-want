document.getElementById('addBtn').addEventListener('click', function () {
    const list = document.getElementById('list');
    const newItem = document.createElement('li');
    newItem.textContent = 'List Item' + (list.children.length + 1);
    list.appendChild(newItem);
});

// 이벤트 버블링과 이벤트 위임이 있기 때문에 이 코드를 실행할 수 있다.
document.getElementById('list').addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        alert('Clicked on  ' + event.target.textContent);
    }
});

