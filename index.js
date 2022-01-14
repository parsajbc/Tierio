var nums = document.getElementById('title_val');
for (i = 2; i < 8; i++) {
    var span = document.createElement('span');
    span.setAttribute('id', 'opts')
    span.textContent = i;
    nums.appendChild(span);
}
var num = nums.getElementsByTagName('span');
var index = 0;

function higher() {
    num[index].style.display = 'none';
    index = (index + 1) % num.length;
    num[index].style.display = 'block';
}

function lower() {
    num[index].style.display = 'none';
    index = (index - 1 + num.length) % num.length;
    num[index].style.display = 'block';
}