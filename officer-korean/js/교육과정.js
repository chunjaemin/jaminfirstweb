
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

            var sub_nm1 = [];
            var sub_nm2 = [];
            var sub_nm3 = [];
            var sub_nm4 = [];
            
            var sub_select1 = [];
            var sub_select2 = [];
            var sub_select3 = [];
            var sub_select4 = [];

            testData.DATA.forEach(item => {
                if (item.subj_grd === "1") {
                    sub1.push(item.subj_dvs);
                    sub_nm1.push(item.subj_nm);
                    sub_select1.push(item.subj_desc);
                }
                if (item.subj_grd === "2") {
                    sub2.push(item.subj_dvs);
                    sub_nm2.push(item.subj_nm);
                    sub_select2.push(item.subj_desc);
                }
                if (item.subj_grd === "3") {
                    sub3.push(item.subj_dvs);
                    sub_nm3.push(item.subj_nm);
                    sub_select3.push(item.subj_desc);
                }
                if (item.subj_grd === "4") {
                    sub4.push(item.subj_dvs);
                    sub_nm4.push(item.subj_nm);
                    sub_select4.push(item.subj_desc);
                }
            });

            var table = document.getElementById('table1');
            for (var i = 0; i < sub1.length; i++) {
                var row = table.insertRow();
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                cell1.innerHTML = '1학년';
                cell2.innerHTML = sub1[i];
                cell3.innerHTML = sub_nm1[i];
                cell4.innerHTML = sub_select1[i];
            }

            var table = document.getElementById('table2');
            for (var i = 0; i < sub2.length; i++) {
                var row = table.insertRow();
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                cell1.innerHTML = '2학년';
                cell2.innerHTML = sub2[i];
                cell3.innerHTML = sub_nm2[i];
                cell4.innerHTML = sub_select2[i];
            }

            var table = document.getElementById('table3');
            for (var i = 0; i < sub3.length; i++) {
                var row = table.insertRow();
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                cell1.innerHTML = '3학년';
                cell2.innerHTML = sub3[i];
                cell3.innerHTML = sub_nm3[i];
                cell4.innerHTML = sub_select3[i];
            }

            var table = document.getElementById('table4');
            for (var i = 0; i < sub4.length; i++) {
                var row = table.insertRow();
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                cell1.innerHTML = '4학년';
                cell2.innerHTML = sub4[i];
                cell3.innerHTML = sub_nm4[i];
                cell4.innerHTML = sub_select4[i];
            }
        })
        .catch(error => console.error(error));
}

loadJSON()

function a_army_1(){
    return fetch('json/육군사관학교 교육과정.json')
    .then(response => response.json())
    .then(data => {
        testData = data; 
        var sub1 = [];
        var sub_nm1 = [];       
        var sub_select1 = [];

        testData.DATA.forEach(item => {
            if (item.subj_grd === "1") {
                sub1.push(item.subj_dvs);
                sub_nm1.push(item.subj_nm);
                sub_select1.push(item.subj_desc);
            }
        });

        var table = document.getElementById('table1');
        for (var i = 0; i < sub1.length; i++) {
            var row = table.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            cell1.innerHTML = '1학년';
            cell2.innerHTML = sub1[i];
            cell3.innerHTML = sub_nm1[i];
            cell4.innerHTML = sub_select1[i];
        }
    })
    .catch(error => console.error(error));
}

function a_army_2(){
    return fetch('json/육군사관학교 교육과정.json')
    .then(response => response.json())
    .then(data => {
        testData = data; 
        var sub2 = [];
        var sub_nm2 = [];       
        var sub_select2 = [];

        testData.DATA.forEach(item => {
            if (item.subj_grd === "2") {
                sub2.push(item.subj_dvs);
                sub_nm2.push(item.subj_nm);
                sub_select2.push(item.subj_desc);
            }
        });

        var table = document.getElementById('table2');
        for (var i = 0; i < sub2.length; i++) {
            var row = table.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            cell1.innerHTML = '2학년';
            cell2.innerHTML = sub2[i];
            cell3.innerHTML = sub_nm2[i];
            cell4.innerHTML = sub_select2[i];
        }
    })
    .catch(error => console.error(error));
}

function a_army_3(){
    return fetch('json/육군사관학교 교육과정.json')
    .then(response => response.json())
    .then(data => {
        testData = data; 
        var sub3 = [];
        var sub_nm3 = [];       
        var sub_select3 = [];

        testData.DATA.forEach(item => {
            if (item.subj_grd === "3") {
                sub3.push(item.subj_dvs);
                sub_nm3.push(item.subj_nm);
                sub_select3.push(item.subj_desc);
            }
        });

        var table = document.getElementById('table3');
        for (var i = 0; i < sub3.length; i++) {
            var row = table.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            cell1.innerHTML = '3학년';
            cell2.innerHTML = sub3[i];
            cell3.innerHTML = sub_nm3[i];
            cell4.innerHTML = sub_select3[i];
        }
    })
    .catch(error => console.error(error));
}

function a_army_4(){
    return fetch('json/육군사관학교 교육과정.json')
    .then(response => response.json())
    .then(data => {
        testData = data; 
        var sub4 = [];
        var sub_nm4 = [];       
        var sub_select4 = [];

        testData.DATA.forEach(item => {
            if (item.subj_grd === "4") {
                sub4.push(item.subj_dvs);
                sub_nm4.push(item.subj_nm);
                sub_select4.push(item.subj_desc);
            }
        });

        var table = document.getElementById('table4');
        for (var i = 0; i < sub3.length; i++) {
            var row = table.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            cell1.innerHTML = '4학년';
            cell2.innerHTML = sub4[i];
            cell3.innerHTML = sub_nm4[i];
            cell4.innerHTML = sub_select4[i];
        }
    })
    .catch(error => console.error(error));
}