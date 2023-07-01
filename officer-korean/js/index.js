
var c_inputbox = document.getElementById('c-inputbox')
var key = document.getElementById('c-select')

//플래그 변수로 선택
var flag1 = document.querySelector('.flag1')
var flag2 = document.querySelector('.flag2')
var flag3 = document.querySelector('.flag3')
var flag4 = document.querySelector('.flag4')
var flag5 = document.querySelector('.flag5')

function c_select_search() {
    //에러캐치
    if (c_inputbox.value <19000000){
        alert('생년월일을 올바르게 적어주세요')
    } 
    //에러가 아닐시 실행
    else {

    }
}

//사관학교일때
function military_army(){
    var num=parseInt(c_inputbox.value);
    if (num >= 200040102 && num <= 200040102 && key >= 0){
        flag1.style.setProperty('display','block','important')
    }
}

//학군사관일때
function rotc(){
    var num=parseInt(c_inputbox.value);
    if (num >= 199903022 && num <= 20070301 && key >= 1 && key<=2){
        flag2.style.setProperty('display','block','important')
    }
}

//학사장교-육군일떄
function b_officer_a(){
    var num=parseInt(c_inputbox.value);
    if (num >= 19990101 && num <= 20070101 && key >= 5){
        flag3.style.setProperty('display','block','important')
    }
}

//학사장교-공군,해군일때 -올해9월에 지원이 있음 9월이후에 기존년도+1로 수정해주어야함
function b_officer_b(){
    var num=parseInt(c_inputbox.value);
    if (num >= 19980101 && num <= 20060101 && key >= 1 && key<=2){
        flag3.style.setProperty('display','block','important')
    }
}

//군가산복무지원 1학년
//군가산복무지원 2학년
//군가산복무지원 3학년
//군가산복무지원 4학년
function s_officer_1(){
    var num=parseInt(c_inputbox.value);
    if (key ==1 && num >= 20000702 && num <= 20080702){
        flag4.style.setProperty('display','block','important')
    } 
    else if (key ==2 && num >= 19990702 && num <= 20070702){
        flag4.style.setProperty('display','block','important')
    } 
    else if (key ==3 && num >= 19980702 && num <= 20060702){
        flag4.style.setProperty('display','block','important')
    } 
    else if (key ==4 && num >= 19970702 && num <= 20050702){
        flag4.style.setProperty('display','block','important')
    }
}

//육군회전익일때 
