let scrollY = window.scrollY;
let scrollX = window.scrollX;

window.addEventListener("scroll", (event) => {
  let scrollY = this.scrollY;
  let scrollX = this.scrollX;
  console.log(scrollY);
});

function fixedTop(){
  alert('스크롤 된 위치는 scrollY');
}

function visible_click1(){
  document.querySelector('.invisible1').classList.toggle('none_visible');
}

function visible_click2(){
  document.querySelector('.invisible2').classList.toggle('none_visible');
}

function visible_click3(){
  document.querySelector('.invisible3').classList.toggle('none_visible');
}

function visible_click4(){
  document.querySelector('.invisible4').classList.toggle('none_visible');
}

function visible_click5(){
  document.querySelector('.invisible5').classList.toggle('none_visible');
}

menu1=Document.querySelector('.content-menu1')
menu2=Document.querySelector('.content-menu2')
menu3=Document.querySelector('.content-menu3')

menu1ClientRect = menu1.getBoundingClientRect(); // DomRect 구하기 (각종 좌표값이 들어있는 객체)

if (menu1ClientRect.top<=0){
  
}