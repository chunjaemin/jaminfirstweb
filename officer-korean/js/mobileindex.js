
var mc_inputbox = document.getElementById('c-inputbox-m');
var mc_select = document.getElementById('c-select1-m');

//플래그 변수로 선택
var mflag1 = document.querySelector('.flag1-m');
var mflag2 = document.querySelector('.flag2-m');
var mflag3 = document.querySelector('.flag3-m');
var mflag4 = document.querySelector('.flag4-m');
var mflag5 = document.querySelector('.flag5-m');
var mnoflag = document.querySelector('.no-flag-box-m');

var mcounting = 0;


//깃발 전부 삭제하는 함수
function mclear__search(){
    mflag1.style.setProperty('display','none','important');
    mflag2.style.setProperty('display','none','important');
    mflag3.style.setProperty('display','none','important');
    mflag4.style.setProperty('display','none','important');
    mflag5.style.setProperty('display','none','important');
    mnoflag.style.setProperty('display','none','important');
}

function mc_select_search() {
    //기존에 있던 깃발 삭제
    mclear__search();
    mcounting=0;
    //에러캐치
    if (mc_inputbox.value <19000000){
        alert('생년월일을 올바르게 적어주세요');
    } 
    //에러가 아닐시 실행 조건에 맞게 깃발생성
    else {
        mmilitary_army();
        mrotc();
        mb_officer_a();
        mb_officer_b();
        ms_officer();
        mpilot();
        mno_flag();
    }
}


//아무것도 해당되지 않을 때
function mno_flag(){
    if (mcounting==0){
        mnoflag.style.setProperty('display','block','important');
    }
}



//사관학교일때
function mmilitary_army(){
    var mnum=parseInt(mc_inputbox.value);
    var mkey = parseFloat(mc_select.value);
    if (mnum >= 20040102 && mnum <= 20080101 && mkey >= 0){
        mflag1.style.setProperty('display','block','important');
        mcounting=mcounting+1;
    }
}

//학군사관일때
function mrotc(){
    var mnum=parseInt(mc_inputbox.value);
    var mkey = parseFloat(mc_select.value);
    if (mnum >= 19990302 && mnum <= 20070301 && mkey >= 1 && mkey<=2){
        mflag2.style.setProperty('display','block','important');4
        mcounting=mcounting+1;
    }
}

//학사장교-육군일떄
function mb_officer_a(){
    var mnum=parseInt(mc_inputbox.value);
    var mkey = parseFloat(mc_select.value);
    if (mnum >= 19990101 && mnum <= 20070101 && mkey >= 5){
        mflag3.style.setProperty('display','block','important');
        mcounting=mcounting+0.5;
    }
}

//학사장교-공군,해군일때 -올해9월에 지원이 있음 9월이후에 기존년도+1로 수정해주어야함
function mb_officer_b(){
    var mnum=parseInt(mc_inputbox.value);
    var mkey = parseFloat(mc_select.value);
    if (mnum >= 19980101 && mnum <= 20060101 && mkey >= 5){
        mflag3.style.setProperty('display','block','important');
        mcounting=mcounting+0.5;
    }
}

//군가산복무지원 1학년
//군가산복무지원 2학년
//군가산복무지원 3학년
//군가산복무지원 4학년
function ms_officer(){
    var mnum=parseInt(mc_inputbox.value);
    var mkey = parseFloat(mc_select.value);
    if (mkey ==1 && mnum >= 20000702 && mnum <= 20080702){
        mflag4.style.setProperty('display','block','important');
        mcounting=mcounting+1;
    } 
    else if (mkey ==2 && mnum >= 19990702 && mnum <= 20070702){
        mflag4.style.setProperty('display','block','important');
        mcounting=mcounting+1;
    } 
    else if (mkey ==3 && mnum >= 19980702 && mnum <= 20060702){
        mflag4.style.setProperty('display','block','important');
        mcounting=mcounting+1;
    } 
    else if (mkey ==4 && mnum >= 19970702 && mnum <= 20050702){
        mflag4.style.setProperty('display','block','important');
        mcounting=mcounting+1;
    }
}

//육군회전익일때 12월 공고나옴 -> 12월 이후에 기존년도 +1 씩 해주어야함

function mpilot(){
    var mnum=parseInt(mc_inputbox.value);
    var mkey = parseFloat(mc_select.value);
    if (mnum >= 19740101 && mnum <= 20040101 && mkey >= 0){
        mflag5.style.setProperty('display','block','important');
        mcounting=mcounting+1;
    }
}
