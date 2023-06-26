
function loadJSON() {
    return fetch('json/육군사관학교 교육과정.json')
        .then(response => response.json())
        .then(data => {
            testData = data; // 외부 스코프의 testData 변수에 할당
            console.log(testData);
            var sub1 = [];
var sub2 = [];
var sub3 = [];
var sub4 = [];

testData.DATA.forEach(item => {
    if (item.subj_grd === "1") {
        sub1.push(item.subj_dvs);
    }
    if (item.subj_grd === "2") {
        sub2.push(item.subj_dvs);
    }
    if (item.subj_grd === "3") {
        sub3.push(item.subj_dvs);
    }
    if (item.subj_grd === "4") {
        sub4.push(item.subj_dvs);
    }
});
document.getElementById('p1').innerHTML=sub3

console.log(sub1);
console.log(sub2);
console.log(sub3);
console.log(sub4);
        })
        .catch(error => console.error(error));
}

loadJSON()

