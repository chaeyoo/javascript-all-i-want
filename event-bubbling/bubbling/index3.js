document.getElementById('div1').addEventListener('click', function (event) {
    if (event.target.id === 'btn') {
        alert('button Clicked!');
    } else if (event.target.id === 'div2') {
        alert('div2 Clicked!')
    } else if (event.target.id === 'div1') {
        alert('div1 Clicked!')
    }
});

