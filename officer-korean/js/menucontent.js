
menu1=document.querySelector('.content-menu1');
menu2=document.querySelector('.content-menu2');
menu3=document.querySelector('.content-menu3');

content1=document.getElementById('content1');
content2=document.getElementById('content2');
content3=document.getElementById('content3');

topnavbar=document.getElementById('navbar');


function visible_click1(){
  if (menu1.classList.contains('fix1') && !content1.classList.contains('none_visible')){
    menu1.classList.remove('fix1');
    content1.style.setProperty('margin-top',0, 'important');
  }
  document.querySelector('.invisible1').classList.toggle('none_visible');
}

function visible_click2(){
  if (menu2.classList.contains('fix2') && !content2.classList.contains('none_visible')){
    menu2.classList.remove('fix2');
    content2.style.setProperty('margin-top',0, 'important');
  }
  document.querySelector('.invisible2').classList.toggle('none_visible');
}

function visible_click3(){
  if (menu3.classList.contains('fix3') && !content3.classList.contains('none_visible')){
    menu3.classList.remove('fix3');
    content3.style.setProperty('margin-top',0, 'important');
  }
  document.querySelector('.invisible3').classList.toggle('none_visible');
}


function visible_click4(){
  document.querySelector('.invisible4').classList.toggle('none_visible');
}

function visible_click5(){
  document.querySelector('.invisible5').classList.toggle('none_visible');
}



window.addEventListener("scroll", (event) => {
  content1=document.getElementById('content1');
  topnavbar=document.getElementById('navbar');
  menu1ClientRect = menu1.getBoundingClientRect(); 
  content1ClientRect = content1.getBoundingClientRect(); 
  topnavbarClientRect = topnavbar.getBoundingClientRect(); 
  if (menu1ClientRect.top < 70 && !content1.classList.contains('none_visible') && !menu1.classList.contains('fix1')) {
    menu1.classList.add('fix1');
    content1.style.setProperty('margin-top',(menu1.clientHeight+5)+'px', 'important');
  } else if (menu1ClientRect.bottom+5 < content1ClientRect.top && menu1.classList.contains('fix1')) {
    menu1.classList.remove('fix1');
    content1.style.setProperty('margin-top',0, 'important');
  }
});

window.addEventListener("scroll", (event) => {
  content2=document.getElementById('content2');
  topnavbar=document.getElementById('navbar');
  menu2ClientRect = menu2.getBoundingClientRect(); 
  content2ClientRect = content2.getBoundingClientRect(); 
  topnavbarClientRect = topnavbar.getBoundingClientRect(); 
  if (menu2ClientRect.top < 70 && !content2.classList.contains('none_visible') && !menu2.classList.contains('fix2')) {
    menu2.classList.add('fix2');
    content2.style.setProperty('margin-top',(menu2.clientHeight+16.2)+'px', 'important');
  } else if (menu2ClientRect.bottom+5 < content2ClientRect.top && menu2.classList.contains('fix2')) {
    menu2.classList.remove('fix2');
    content2.style.setProperty('margin-top',0, 'important');
  }
});

window.addEventListener("scroll", (event) => {
  content3=document.getElementById('content3');
  topnavbar=document.getElementById('navbar');
  menu3ClientRect = menu3.getBoundingClientRect(); 
  content3ClientRect = content3.getBoundingClientRect(); 
  topnavbarClientRect = topnavbar.getBoundingClientRect(); 
  if (menu3ClientRect.top < 70 && !content3.classList.contains('none_visible') && !menu3.classList.contains('fix3')) {
    menu3.classList.add('fix3');
    content3.style.setProperty('margin-top',(menu3.clientHeight+16.8)+'px', 'important');
  } else if (menu3ClientRect.bottom+5 < content3ClientRect.top && menu3.classList.contains('fix3')) {
    menu3.classList.remove('fix3');
    content3.style.setProperty('margin-top',0, 'important');
  }
});





function left_fade_function2(){
  var fadebox2=document.getElementById('fade-box2')
  var searchbox2=document.getElementById('mini-search2')
  fadebox2.classList.toggle('fixleft')
  searchbox2.classList.toggle('imagechange')
}






