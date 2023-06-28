/**육군사관학교 로직 **/

function a_army_1() {
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

            var table1 = document.getElementById('table1');
            var table2 = document.getElementById('table2');
            var table3 = document.getElementById('table3');

            var rowCount = table1.rows.length;
            for (var i = rowCount - 1; i > 0; i--) {
                table1.deleteRow(i);
            }

            for (var i = 0; i < sub1.length; i++) {
                var row = table1.insertRow();
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                cell1.innerHTML = '1학년';
                cell2.innerHTML = sub1[i];
                cell3.innerHTML = sub_nm1[i];
                cell4.innerHTML = sub_select1[i];
            }
            table2.style.setProperty('display', 'none', 'important')
            table3.style.setProperty('display', 'none', 'important')
            table1.style.setProperty('display', 'block', 'important')
        })
}

function a_army_2() {
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

            var table1 = document.getElementById('table1');
            var table2 = document.getElementById('table2');
            var table3 = document.getElementById('table3');

            var rowCount = table1.rows.length;
            for (var i = rowCount - 1; i > 0; i--) {
                table1.deleteRow(i);
            }

            for (var i = 0; i < sub2.length; i++) {
                var row = table1.insertRow();
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                cell1.innerHTML = '2학년';
                cell2.innerHTML = sub2[i];
                cell3.innerHTML = sub_nm2[i];
                cell4.innerHTML = sub_select2[i];
            }
            table2.style.setProperty('display', 'none', 'important')
            table3.style.setProperty('display', 'none', 'important')
            table1.style.setProperty('display', 'block', 'important')
        })
}

function a_army_3() {
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

            var table1 = document.getElementById('table1');
            var table2 = document.getElementById('table2');
            var table3 = document.getElementById('table3');

            var rowCount = table1.rows.length;
            for (var i = rowCount - 1; i > 0; i--) {
                table1.deleteRow(i);
            }

            for (var i = 0; i < sub3.length; i++) {
                var row = table1.insertRow();
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                cell1.innerHTML = '3학년';
                cell2.innerHTML = sub3[i];
                cell3.innerHTML = sub_nm3[i];
                cell4.innerHTML = sub_select3[i];
            }
            table2.style.setProperty('display', 'none', 'important')
            table3.style.setProperty('display', 'none', 'important')
            table1.style.setProperty('display', 'block', 'important')
        })
}

function a_army_4() {
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

            var table1 = document.getElementById('table1');
            var table2 = document.getElementById('table2');
            var table3 = document.getElementById('table3');

            var rowCount = table1.rows.length;
            for (var i = rowCount - 1; i > 0; i--) {
                table1.deleteRow(i);
            }

            for (var i = 0; i < sub4.length; i++) {
                var row = table1.insertRow();
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                cell1.innerHTML = '4학년';
                cell2.innerHTML = sub4[i];
                cell3.innerHTML = sub_nm4[i];
                cell4.innerHTML = sub_select4[i];
            }
            table2.style.setProperty('display', 'none', 'important')
            table3.style.setProperty('display', 'none', 'important')
            table1.style.setProperty('display', 'block', 'important')
        })
}

/**공군사관학교 로직 **/

function b_army_1() {
    return fetch('json/공군사관학교 교육과정.json')
        .then(response => response.json())
        .then(data => {
            testData = data;
            var array2 = [];

            testData.DATA.forEach(item => {

                var table1 = document.getElementById('table1');
                var table2 = document.getElementById('table2');
                var table3 = document.getElementById('table3');

                var rowCount = table2.rows.length;
                for (var i = rowCount - 1; i > 0; i--) {
                    table2.deleteRow(i);
                }

                var row = table2.insertRow();
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                cell1.innerHTML = '1학년';
                cell2.innerHTML = '';
                cell3.innerHTML = '없음';
                cell4.innerHTML = '앖음';
                cell5.innerHTML = '없음';

                table3.style.setProperty('display', 'none', 'important')
                table1.style.setProperty('display', 'none', 'important')
                table2.style.setProperty('display', 'block', 'important')
            })
        })
}

function b_army_2() {
    return fetch('json/공군사관학교 교육과정.json')
        .then(response => response.json())
        .then(data => {
            testData = data;
            var array2 = [];

            testData.DATA.forEach(item => {
                if (item.agrd === "2" && item.aessntl !="" && item.aessntl != "-") {
                    var array1 = [];
                    array1.push(item.agrd); //학년
                    array1.push(item.asmstr); //학기
                    array1.push(item.amjr); //과목구분
                    array1.push(item.aessntl); //과목명
                    array1.push('전공필수'); //전공구분
                    array2.push(array1);
                }
                if (item.agrd === "2" && item.intesive_mjr != "-") {
                    var array1 = [];
                    array1.push(item.agrd); //학년
                    array1.push(item.asmstr); //학기
                    array1.push(item.amjr); //과목구분
                    array1.push(item.intesive_mjr); //과목명
                    array1.push('전공심화'); //전공구분
                    array2.push(array1);
                }
            });

            var table1 = document.getElementById('table1');
            var table2 = document.getElementById('table2');
            var table3 = document.getElementById('table3');

            var rowCount = table2.rows.length;
            for (var i = rowCount - 1; i > 0; i--) {
                table2.deleteRow(i);
            }

            for (var i = 0; i < array2.length; i++) {
                var row = table2.insertRow();
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                cell1.innerHTML = array2[i][0];
                cell2.innerHTML = array2[i][1];
                cell3.innerHTML = array2[i][2];
                cell4.innerHTML = array2[i][3];
                cell5.innerHTML = array2[i][4];
            }
            table3.style.setProperty('display', 'none', 'important')
            table1.style.setProperty('display', 'none', 'important')
            table2.style.setProperty('display', 'block', 'important')
        })
}

function b_army_3() {
    return fetch('json/공군사관학교 교육과정.json')
        .then(response => response.json())
        .then(data => {
            testData = data;
            var array2 = [];

            testData.DATA.forEach(item => {
                if (item.agrd === "3" && item.aessntl !="" && item.aessntl != "-") {
                    var array1 = [];
                    array1.push(item.agrd); //학년
                    array1.push(item.asmstr); //학기
                    array1.push(item.amjr); //과목구분
                    array1.push(item.aessntl); //과목명
                    array1.push('전공필수'); //전공구분
                    array2.push(array1);
                }
                if (item.agrd === "3" && item.intesive_mjr != "-") {
                    var array1 = [];
                    array1.push(item.agrd); //학년
                    array1.push(item.asmstr); //학기
                    array1.push(item.amjr); //과목구분
                    array1.push(item.intesive_mjr); //과목명
                    array1.push('전공심화'); //전공구분
                    array2.push(array1);
                }
            });

            var table1 = document.getElementById('table1');
            var table2 = document.getElementById('table2');
            var table3 = document.getElementById('table3');

            var rowCount = table2.rows.length;
            for (var i = rowCount - 1; i > 0; i--) {
                table2.deleteRow(i);
            }

            for (var i = 0; i < array2.length; i++) {
                var row = table2.insertRow();
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                cell1.innerHTML = array2[i][0];
                cell2.innerHTML = array2[i][1];
                cell3.innerHTML = array2[i][2];
                cell4.innerHTML = array2[i][3];
                cell5.innerHTML = array2[i][4];
            }
            table3.style.setProperty('display', 'none', 'important')
            table1.style.setProperty('display', 'none', 'important')
            table2.style.setProperty('display', 'block', 'important')
        })
}

function b_army_4() {
    return fetch('json/공군사관학교 교육과정.json')
        .then(response => response.json())
        .then(data => {
            testData = data;
            var array2 = [];

            testData.DATA.forEach(item => {
                if (item.agrd === "4" && item.aessntl !="" && item.aessntl != "-") {
                    var array1 = [];
                    array1.push(item.agrd); //학년
                    array1.push(item.asmstr); //학기
                    array1.push(item.amjr); //과목구분
                    array1.push(item.aessntl); //과목명
                    array1.push('전공필수'); //전공구분
                    array2.push(array1);
                }
                if (item.agrd === "4" && item.intesive_mjr != "-") {
                    var array1 = [];
                    array1.push(item.agrd); //학년
                    array1.push(item.asmstr); //학기
                    array1.push(item.amjr); //과목구분
                    array1.push(item.intesive_mjr); //과목명
                    array1.push('전공심화'); //전공구분
                    array2.push(array1);
                }
            });

            var table1 = document.getElementById('table1');
            var table2 = document.getElementById('table2');
            var table3 = document.getElementById('table3');

            var rowCount = table2.rows.length;
            for (var i = rowCount - 1; i > 0; i--) {
                table2.deleteRow(i);
            }

            for (var i = 0; i < array2.length; i++) {
                var row = table2.insertRow();
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                var cell3 = row.insertCell(2);
                var cell4 = row.insertCell(3);
                var cell5 = row.insertCell(4);
                cell1.innerHTML = array2[i][0];
                cell2.innerHTML = array2[i][1];
                cell3.innerHTML = array2[i][2];
                cell4.innerHTML = array2[i][3];
                cell5.innerHTML = array2[i][4];
            }
            table3.style.setProperty('display', 'none', 'important')
            table1.style.setProperty('display', 'none', 'important')
            table2.style.setProperty('display', 'block', 'important')
        })
}

var selectElement1 = document.getElementById("Select1");
var selectElement2 = document.getElementById("Select2");


function select_search() {
    if (selectElement1.value == '육군사관학교' && selectElement2.value == "1학년") {
        a_army_1();
    }
    if (selectElement1.value == '육군사관학교' && selectElement2.value == "2학년") {
        a_army_2();
    }
    if (selectElement1.value == '육군사관학교' && selectElement2.value == "3학년") {
        a_army_3();
    }
    if (selectElement1.value == '육군사관학교' && selectElement2.value == "4학년") {
        a_army_4();
    }
    if (selectElement1.value == '공군사관학교' && selectElement2.value == "1학년") {
        b_army_1();
    }
    if (selectElement1.value == '공군사관학교' && selectElement2.value == "2학년") {
        b_army_2();
    }
    if (selectElement1.value == '공군사관학교' && selectElement2.value == "3학년") {
        b_army_3();
    }
    if (selectElement1.value == '공군사관학교' && selectElement2.value == "4학년") {
        b_army_4();
    }
}

selectElement1.addEventListener("change", function () {
    var selectElement3 = document.getElementById('Select3');
    if (selectElement1.value === "해군사관학교") {
        selectElement3.style.setProperty('display', 'block', 'important');
    } else {
        selectElement3.style.setProperty('display', 'none', 'important');
    }
});