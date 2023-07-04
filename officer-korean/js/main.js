
function visible_click(){
    var mobilemenu=document.getElementById('n-button')
    mobilemenu.classList.toggle('none_visible');
}

function left_fade_function1() {
    var fadebox1 = document.getElementById('fade-box1')
    fadebox1.classList.toggle('fixleft')
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