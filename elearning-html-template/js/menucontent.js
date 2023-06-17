

function locate(){
  let scrolly = window.scrollY;
  alert(scrolly);
}

function visible_click1(){
  if (menu1.classList.contains('fix1') && !content1.classList.contains('none_visible')){
    menu1.classList.remove('fix1');
    content1.classList.remove('basic-setting')
    window.scrollTo({top:239.382, behavior:'instant'})
  }
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

menu1=document.querySelector('.content-menu1');
menu2=document.querySelector('.content-menu2');
menu3=document.querySelector('.content-menu3');

content1=document.querySelector('.content-menu-content1');


window.addEventListener("scroll", (event) => {
  content1ClientRect = content1.getBoundingClientRect(); 
  if (content1ClientRect.top <= 135.5 && !content1.classList.contains('none_visible') && !menu1.classList.contains('fix1')) {
    menu1.classList.add('fix1');
    content1.classList.add('basic-setting');
  } else if (content1ClientRect.top > 135.5 && menu1.classList.contains('fix1')) {
    menu1.classList.remove('fix1');
    content1.classList.remove('basic-setting')
  }
});


