

window.onload = function () {
    var menu_hide = document.getElementById('mouseover1');
    var menu = document.getElementById('c-top-menu')


    document.querySelectorAll('.darkstart').forEach(function (box) {
        box.addEventListener('touchstart', function () {
            box.classList.toggle('dark');
        });
        box.addEventListener('touchend', function () {
            box.classList.toggle('dark');
        });
    });
    

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
  };

