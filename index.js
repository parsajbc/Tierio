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

function goToInfoPage() {
    var intro = document.getElementById('page_one');
    var x = window.getComputedStyle(intro).visibility;
    var info = document.getElementById('page_two');
    if (x == 'visible') {
        const col = document.getElementsByTagName("div");
        for (i = 0; i < col.length; i++) {
            col[i].classList.add("noTrans");
        }
        intro.style.visibility = 'hidden';
        info.style.visibility = 'visible';
    }
}

function goToTitlePage() {
    var intro = document.getElementById('page_one');
    var info = document.getElementById('page_two');
    var x = window.getComputedStyle(info).visibility;
    if (x == 'visible') {
        const col = document.getElementsByTagName("label");
        for (i = 0; i < col.length; i++) {
            col[i].classList.add("noTrans");
        }
        info.style.visibility = 'hidden';
        intro.style.visibility = 'visible';
    }
}

function backToNormalOne() {
    const col = document.getElementsByTagName("div");
    for (i = 0; i < col.length; i++) {
        col[i].classList.remove("noTrans");
    }
}

function backToNormalTwo() {
    const col = document.getElementsByTagName("label");
    for (i = 0; i < col.length; i++) {
        col[i].classList.remove("noTrans");
    }
}

const image_input = document.querySelector("#img");
var uploaded_image = "";
image_input.addEventListener("change", function () {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        document.querySelector("#display_image").style.backgroundImage = 'url(${uploaded_image})';
    });
    reader.readAsDataURL(this.files[0]);
})