


function visible_click() {
    document.getElementById('n-button').classList.toggle('none_visible');
}



var selectElement1 = document.getElementById("mySelect1");
var selectElement2 = document.getElementById("mySelect2");

selectElement1.addEventListener("change", function () {
    if (selectElement1.value === "23세") {
        alert("23세가 선택되었습니다")
    }
});

function fade_search() {
    if (selectElement1.value == "21세" && selectElement2.value == "2학년") {
        alert('합격');
    }
}


function left_fade_function1() {
    var fadebox1 = document.getElementById('fade-box1')
    var searchbox1 = document.getElementById('mini-search1')
    fadebox1.classList.toggle('fixleft')
    searchbox1.classList.toggle('imagechange')
}

function search_computer() {
    var mini_box = document.getElementById('mini-search-box1');
    mini_box.classList.toggle('fixleft1');
}

window.onload = function() {
    var menu_hide = document.getElementById('mouseover1');
    var menu = document.getElementById('c-right-menu-container')
    menu.addEventListener('mouseover', function () {
        menu_hide.style.setProperty('display', 'block', 'important');
    });

    menu.addEventListener('mouseout', function () {
        menu_hide.style.setProperty('display', 'none', 'important');
    });

    menu_hide.addEventListener('mouseover', function () {
        menu_hide.style.setProperty('display', 'block', 'important');
    });

    menu_hide.addEventListener('mouseout', function () {
        menu_hide.style.setProperty('display', 'none', 'important');
    });


    document.querySelectorAll('.darkstart').forEach(function (box) {
        box.addEventListener('touchstart', function () {
            box.classList.toggle('dark');
        });
        box.addEventListener('touchend', function () {
            box.classList.toggle('dark');
        });
    });
  };
