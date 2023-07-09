var table1 = document.querySelector('.table4-1')
var table3 = document.querySelector('.table4-2')

var bottom_menu1 = document.querySelector('.bottom-menu1')
var bottom_menu3 = document.querySelector('.bottom-menu3')

//1번메뉴 호버효과
bottom_menu1.addEventListener('mouseover', function () {
    table1.style.setProperty('filter', 'brightness(0.5)', 'important');
});

bottom_menu1.addEventListener('mouseout', function () {
    table1.style.setProperty('filter', 'none', 'important');
});


//3번메뉴 호버효과
bottom_menu3.addEventListener('mouseover', function () {
    table3.style.setProperty('filter', 'brightness(0.5)', 'important');
});

bottom_menu3.addEventListener('mouseout', function () {
    table3.style.setProperty('filter', 'none', 'important');
});