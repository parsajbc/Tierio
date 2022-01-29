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

function changeNameInputNum() {
    var col = document.getElementsByClassName('input-container');
    var val = num[index].textContent;
    for (i = 0; i < 7; i++) {
        if (i < val) {
            col[i].style.display = "block";
        } else {
            col[i].style.display = "none";
        }
    }
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

function goToInfoPage2() {
    var tier = document.getElementById('page_three');
    var x = window.getComputedStyle(tier).visibility;
    var info = document.getElementById('page_two');
    if (x == 'visible') {
        tier.style.visibility = 'hidden';
        info.style.visibility = 'visible';
    }
}

function goToTitlePage() {
    var intro = document.getElementById('page_one');
    var info = document.getElementById('page_two');
    var x = window.getComputedStyle(info).visibility;
    if (x == 'visible') {
        var col = document.getElementsByTagName("label");
        for (i = 0; i < col.length; i++) {
            col[i].classList.add("noTrans");
        }
        document.getElementById("warning-1").style.transition = '0s';
        document.getElementById("warning-2").style.transition = '0s';
        document.getElementById("warning-3").style.transition = '0s';
        var col2 = document.getElementsByClassName("btn");
        for (i = 0; i < col2.length; i++) {
            col2[i].style.transition = "0s";
        }
        info.style.visibility = 'hidden';
        intro.style.visibility = 'visible';
    }
}

function goToTierPage() {
    var tier = document.getElementById('page_three');
    var info = document.getElementById('page_two');
    var x = window.getComputedStyle(info).visibility;
    var y = true;
    var col = document.getElementsByClassName('input-container');
    var val = num[index].textContent;
    for (i = 0; i < val; i++) {
        if (i < val) {
            var z = col[i].getElementsByTagName("input")[0];
            if (z.value == "") {
                y = false;
            }
        }
    }
    var m = document.getElementById("image_container").getElementsByTagName("div");
    if (x == 'visible' && y && m.length > 0) {
        var col = document.getElementsByTagName("label");
        for (i = 0; i < col.length; i++) {
            col[i].classList.add("noTrans");
        }
        document.getElementById("warning-1").style.transition = '0s';
        document.getElementById("warning-2").style.transition = '0s';
        document.getElementById("warning-3").style.transition = '0s';
        var col2 = document.getElementsByClassName("btn");
        for (i = 0; i < col2.length; i++) {
            col2[i].style.transition = "0s";
        }
        info.style.visibility = 'hidden';
        tier.style.visibility = 'visible';
    }
    if (!y) {
        document.getElementById("warning-1").style.opacity = 0;
        document.getElementById("warning-3").style.opacity = 0;
        document.getElementById("warning-2").style.opacity = 1;
    }
    if (y & m.length == 0) {
        document.getElementById("warning-1").style.opacity = 0;
        document.getElementById("warning-3").style.opacity = 1;
        document.getElementById("warning-2").style.opacity = 0;
    }
}

function backToNormalOne() {
    var col = document.getElementsByTagName("div");
    for (i = 0; i < col.length; i++) {
        col[i].classList.remove("noTrans");
    }
}

function backToNormalTwo() {
    const col = document.getElementsByTagName("label");
    for (i = 0; i < col.length; i++) {
        col[i].classList.remove("noTrans");
    }
    document.getElementById("warning-1").style.transition = '1.5s';
    document.getElementById("warning-2").style.transition = '1.5s';
    document.getElementById("warning-3").style.transition = '1.5s';
    var col2 = document.getElementsByClassName("btn");
    for (i = 0; i < col2.length; i++) {
        col2[i].style.transition = "0.3s";
    }
}

const image_input = document.querySelector("#img");
const img_container = document.getElementById("image_container");
var uploaded_image = "";
var maxImages = 0;
const warning = document.getElementById('warning-1');

image_input.addEventListener('change', function () {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        uploaded_image = reader.result;
        document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
    image_input.value = '';
});

function addImage() {
    if (uploaded_image != 0 && maxImages < 5) {
        var div = document.createElement("div");
        var div2 = document.createElement("div");
        div2.setAttribute("class", "added_image_deleter");
        div2.innerHTML = '<i class="fas fa-times"></i>';
        div2.setAttribute("onclick", "remove(this)")
        div.appendChild(div2);
        div.setAttribute("class", "added_image");
        div.style.backgroundImage = `url(${uploaded_image})`;
        img_container.appendChild(div);
        uploaded_image = "";
        document.querySelector("#display_image").style.backgroundImage = ``;
        maxImages += 1
        document.getElementById("warning-3").style.opacity = 0;
    }
    if (maxImages == 5) {
        warning.style.opacity = 1;
        document.getElementById("warning-2").style.opacity = 0;
        document.getElementById("warning-3").style.opacity = 0;
    }
}

function remove(el) {
    var element = el.parentElement;
    element.remove();
    maxImages -= 1;
    warning.style.opacity = 0;
}



