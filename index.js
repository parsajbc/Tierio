var selected = null;

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
        emptyTiers();
        var t = document.getElementById("image_dragbox").getElementsByTagName('div');
        while (t.length != 0) {
            var div = document.createElement("div");
            div.setAttribute("class", "added_image_deleter");
            div.innerHTML = '<i class="fas fa-times"></i>';
            div.setAttribute("onclick", "remove(this)");
            t[0].setAttribute("class", "added_image");
            t[0].setAttribute("onclick", "");
            t[0].appendChild(div);
            document.getElementById("image_container").appendChild(t[0]);
        }
        removeTiers();
        tier.style.visibility = 'hidden';
        info.style.visibility = 'visible';
        if (selected != null) {
            selected.style.border = "1px solid rgba(255, 255, 255, 1)";
        }
        selected = null;
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

function makeTiers() {
    var val = num[index].textContent;
    for (i = 0; i < val; i++) {
        var div = document.createElement("fieldset");
        div.setAttribute("class", "tier");
        div.style.backgroundColor = "rgba(30, 255, 0, " + ((1 - (1 / val) * i) / 2).toString(10) + ")";
        var leg = document.createElement("legend");
        leg.innerHTML = document.getElementsByClassName('input-container')[i].getElementsByTagName("input")[0].value;
        div.appendChild(leg)
        div.setAttribute("onclick", "moveToTierList(this)");
        div.setAttribute("onmouseover", "onMouseTier(this)");
        div.setAttribute("onmouseout", "offMouseTier(this)");
        document.getElementById("tier_list").appendChild(div);
    }
}

function removeTiers() {
    var tiers = document.getElementById("tier_list");
    while (tiers.children.length != 0) {
        tiers.removeChild(tiers.children[0]);
    }
}

function emptyTiers() {
    var tier_list = document.getElementById("tier_list").children;
    for (i = 0; i < tier_list.length; i++) {
        while (tier_list[i].children.length - 1 != 0) {
            document.getElementById("image_dragbox").appendChild(tier_list[i].children[0]);
        }
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
        var t = document.getElementById("image_container").getElementsByTagName('div');
        while (t.length != 0) {
            t[0].removeChild(t[0].children[0]);
            t[0].setAttribute("class", "image_option");
            t[0].setAttribute("onclick", "select(this), moveBefore(this)")
            t[0].setAttribute("onmouseover", "activeSensor(this)")
            t[0].setAttribute("onmouseout", "deactiveSensor(this)")
            document.getElementById("image_dragbox").appendChild(t[0]);
        }
        makeTiers();
        info.style.visibility = 'hidden';
        tier.style.visibility = 'visible';
        document.body.style.backgroundImage.value = "linear-gradient(to right, rgba(245, 99, 2,0), rgba(30, 255, 0,0.5))";
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
    var captureElement = document.querySelector('#tier_list')
    captureElement.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
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
    if (uploaded_image != 0 && maxImages < 20) {
        var div = document.createElement("div");
        var div2 = document.createElement("div");
        div2.setAttribute("class", "added_image_deleter");
        div2.innerHTML = '<i class="fas fa-times"></i>';
        div2.setAttribute("onclick", "remove(this)")
        div.appendChild(div2);
        div.setAttribute("class", "added_image");
        div.setAttribute("onmouseover", "activeSensor(this)")
        div.setAttribute("onmouseout", "deactiveSensor(this)")
        div.style.backgroundImage = `url(${uploaded_image})`;
        img_container.appendChild(div);
        // uploaded_image = "";
        // document.querySelector("#display_image").style.backgroundImage = ``;
        maxImages += 1
        document.getElementById("warning-3").style.opacity = 0;
    }
    if (maxImages == 20) {
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

function select(el) {
    if (selected == null) {
        selected = el;
        el.style.border = "3px solid white";
    }
}

function activeSensor(el) {
    document.getElementById("sensor").style.height = '1px';
    if (selected != el) {
        el.style.borderColor = "green";
    }
}

function deactiveSensor(el) {
    document.getElementById("sensor").style.height = '0px';
    if (el != select) {
        el.style.borderColor = "rgba(255, 255, 255, 1)";
    }

}


function moveToTierList(el) {
    if (document.getElementById("sensor").style.height == '0px' && selected != null) {
        el.children[el.children.length - 1].insertAdjacentElement('beforebegin', selected);
        selected.style.border = "1px solid rgba(255, 255, 255, 1)";
        selected = null;
    }
}

function moveToDragBox(el) {
    if (document.getElementById("sensor").style.height == '0px' && selected != null) {
        el.appendChild(selected);
        selected.style.border = "1px solid rgba(255, 255, 255, 1)";
        selected = null;
    }
}

function moveBefore(el) {
    if (el == selected) {
        return;
    }
    if (selected != null) {
        el.insertAdjacentElement('beforebegin', selected);
        selected.style.border = "1px solid rgba(255, 255, 255, 1)";
        selected = null;
    }
}


// credit to https://jsfiddle.net/Ludolfyn/dzvb4q7y/
function downloadTierList() {
    if (document.querySelector('#image_dragbox').children.length != 0) {
        return;
    }

    const captureElement = document.querySelector('#tier_list');
    captureElement.style.backgroundColor = "#080b1a";

    html2canvas(captureElement, { scale: 10 })
        .then(canvas => {
            canvas.style.display = 'none'
            document.body.appendChild(canvas)
            return canvas
        })
        .then(canvas => {
            const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
            const a = document.createElement('a')
            a.setAttribute('download', 'my-image.png')
            a.setAttribute('href', image)
            a.click()
            canvas.remove()
        })

}


function onMouseTier(el) {
    el.style.border = "3px solid white";
}

function offMouseTier(el) {
    el.style.border = "1px solid rgba(30, 255, 0, 0.7)";
}
