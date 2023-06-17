

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
  if (menu2.classList.contains('fix2') && !content2.classList.contains('none_visible')){
    menu2.classList.remove('fix2');
    content2.classList.remove('basic-setting')
    window.scrollTo({top:239.382, behavior:'instant'})
  }
  document.querySelector('.invisible2').classList.toggle('none_visible');
}

function visible_click3(){
  if (menu3.classList.contains('fix3') && !content3.classList.contains('none_visible')){
    menu3.classList.remove('fix3');
    content3.classList.remove('basic-setting')
    window.scrollTo({top:239.382, behavior:'instant'})
  }
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
content2=document.querySelector('.content-menu-content2');
content3=document.querySelector('.content-menu-content3');


window.addEventListener("scroll", (event) => {
  content1ClientRect = content1.getBoundingClientRect(); 
  if (content1ClientRect.top <= 135.5 && !content1.classList.contains('none_visible') && !menu1.classList.contains('fix1')) {
    menu1.classList.add('fix1');
    content1.classList.add('basic-setting1');
  } else if (content1ClientRect.top > 135.5 && menu1.classList.contains('fix1')) {
    menu1.classList.remove('fix1');
    content1.classList.remove('basic-setting1')
  }
});

window.addEventListener("scroll", (event) => {
  content2ClientRect = content2.getBoundingClientRect(); 
  if (content2ClientRect.top <= 135.5 && !content2.classList.contains('none_visible') && !menu2.classList.contains('fix2')) {
    menu2.classList.add('fix2');
    content2.classList.add('basic-setting2');
  } else if (content2ClientRect.top > 135.5 && menu2.classList.contains('fix2')) {
    menu2.classList.remove('fix2');
    content2.classList.remove('basic-setting2')
  }
});

window.addEventListener("scroll", (event) => {
  content3ClientRect = content3.getBoundingClientRect(); 
  if (content3ClientRect.top <= 135.5 && !content3.classList.contains('none_visible') && !menu3.classList.contains('fix3')) {
    menu3.classList.add('fix3');
    content3.classList.add('basic-setting3');
  } else if (content3ClientRect.top > 135.5 && menu3.classList.contains('fix3')) {
    menu3.classList.remove('fix3');
    content3.classList.remove('basic-setting3')
  }
});


