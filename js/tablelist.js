//tablelist.js
let data = [{
    name: "호준",
    eng: "영어 ",
    math: "수학",
    math: "수학"
}, {
    name: "민수",
    eng: "100 ",
    math: "80",
    math: "수학"
}, {
    name: "현정",
    eng: "100 ",
    math: "50",
    math: "수학"
}, {
    name: "현정",
    eng: "100 ",
    math: "50",
    math: "수학"
}];
 createTable();
createTable2();

function createTable2() {
    let all = '<table border="1">';
    for (let row of data) {
        all += "<tr>";
        for (let field in row) {
            all += "<td>" + row[field] + "</td>";
        }
        all += "</tr>";
    }
    all += '</table>';
    document.write(all);
}

function createTable() {
    let tableTag = document.createElement('table');
    tableTag.setAttribute('border', '1')
    for (let row of data) {
        let trTag = document.createElement('tr');
        for (let field in row) {
            let tdTag = document.createElement('td');
            if (field == 'name')
                tdTag.style.backgroundColor = "pink";
                tdTag.style.color = "gray";
            let text = document.createTextNode(row[field]);
            tdTag.appendChild(text);
            trTag.appendChild(tdTag);
        }
        tableTag.appendChild(trTag)
    }
    document.getElementById('show').appendChild(tableTag);
}