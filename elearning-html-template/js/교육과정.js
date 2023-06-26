
function loadJSON() {
    return fetch('json/육군사관학교 교육과정.json')
        .then(response => response.json())
        .then(data => {
            testData = data; // 외부 스코프의 testData 변수에 할당
            console.log(testData);
            document.getElementById('p1').innerHTML = testData.DATA[0].subj_dvs;
        })
        .catch(error => console.error(error));
}

loadJSON()
