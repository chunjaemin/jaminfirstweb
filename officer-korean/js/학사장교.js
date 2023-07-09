var table1 = document.querySelector('.table3-1')
var table2 = document.querySelector('.table3-2')
var table3 = document.querySelector('.table3-3')

var bottom_menu1 = document.querySelector('.bottom-menu1')
var bottom_menu2 = document.querySelector('.bottom-menu2')
var bottom_menu3 = document.querySelector('.bottom-menu3')

//1번메뉴 호버효과
bottom_menu1.addEventListener('mouseover', function () {
    table1.style.setProperty('filter', 'brightness(0.5)', 'important');
});

bottom_menu1.addEventListener('mouseout', function () {
    table1.style.setProperty('filter', 'none', 'important');
});

//2번메뉴 호버효과
bottom_menu2.addEventListener('mouseover', function () {
    table2.style.setProperty('filter', 'brightness(0.5)', 'important');
});

bottom_menu2.addEventListener('mouseout', function () {
    table2.style.setProperty('filter', 'none', 'important');
});

//3번메뉴 호버효과
bottom_menu3.addEventListener('mouseover', function () {
    table3.style.setProperty('filter', 'brightness(0.5)', 'important');
});

bottom_menu3.addEventListener('mouseout', function () {
    table3.style.setProperty('filter', 'none', 'important');
});