var table1 = document.querySelector('.r1')
var table2 = document.querySelector('.r2')
var table3 = document.querySelector('.r3')
var table4 = document.querySelector('.r4')

var bottom_menu1 = document.querySelector('.bottom-menu1')
var bottom_menu2 = document.querySelector('.bottom-menu2')
var bottom_menu3 = document.querySelector('.bottom-menu3')
var bottom_menu4 = document.querySelector('.bottom-menu4')

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


//4번메뉴 호버효과
bottom_menu4.addEventListener('mouseover', function () {
    table4.style.setProperty('filter', 'brightness(0.5)', 'important');
});

bottom_menu4.addEventListener('mouseout', function () {
    table4.style.setProperty('filter', 'none', 'important');
});