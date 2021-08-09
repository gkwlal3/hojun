let json = `[{"id":1,"first_name":"Rosie","last_name":"Joly","email":"rjoly0@examiner.com","gender":"Bigender","ip_address":"51.190.96.125"},
{"id":2,"first_name":"Garey","last_name":"Tomadoni","email":"gtomadoni1@discovery.com","gender":"Non-binary","ip_address":"137.113.70.39"},
{"id":3,"first_name":"Pieter","last_name":"Sherrott","email":"psherrott2@addtoany.com","gender":"Genderfluid","ip_address":"36.120.56.62"},
{"id":4,"first_name":"Ernestus","last_name":"Iliff","email":"eiliff3@instagram.com","gender":"Polygender","ip_address":"197.169.219.231"},
{"id":5,"first_name":"Avigdor","last_name":"Lead","email":"alead4@engadget.com","gender":"Agender","ip_address":"90.43.187.241"},
{"id":6,"first_name":"Jasmine","last_name":"Walenta","email":"jwalenta5@narod.ru","gender":"Genderqueer","ip_address":"55.222.127.137"},
{"id":7,"first_name":"Linnet","last_name":"Cadman","email":"lcadman6@uiuc.edu","gender":"Polygender","ip_address":"144.251.110.87"},
{"id":8,"first_name":"Rubi","last_name":"Gribbins","email":"rgribbins7@rambler.ru","gender":"Genderqueer","ip_address":"43.93.60.184"},
{"id":9,"first_name":"Leanor","last_name":"Coaten","email":"lcoaten8@ibm.com","gender":"Agender","ip_address":"75.202.230.9"},
{"id":10,"first_name":"Damita","last_name":"Serraillier","email":"dserraillier9@gmpg.org","gender":"Genderqueer","ip_address":"45.161.215.61"}]`;

let obj = JSON.parse(json);
console.log(obj);

for (let row of obj) {
    console.log(row);
}

let tableTag = document.createElement('table');
createTable();

function createTable() {
    tableTag.setAttribute('border', '1');
    createHeader()
    for (let row of obj) {
        let trTag = document.createElement('tr');
        
        trTag.setAttribute('id',row.id) //tr을
        trTag.onclick = showDetail;
        trTag.onmouseover = changeColor;
        trTag.onmouseout = originColor;
        
        for (let field in row) {
            let tdTag = document.createElement('td');
            let text = document.createTextNode(row[field]);
            tdTag.appendChild(text);
            trTag.appendChild(tdTag);
        }
        let btn = document.createElement('button');
        btn.onclick = deleteRow;
        let text = document.createTextNode('삭제');
        btn.appendChild(text);
        let tdTag = document.createElement('td');
        tdTag.appendChild(btn)
        trTag.appendChild(tdTag);
        
        tableTag.appendChild(trTag);
    }
    document.getElementById('show').appendChild(tableTag);
}
function createHeader() {
    let titles = ['id', 'first_name', 'last_name', 'email', 'gender', 'ip_address', '삭제']
    let trTag = document.createElement('tr');
    for (let field of titles) {
        let tdTag = document.createElement('td');
        let text = document.createTextNode(field);
        tdTag.appendChild(text);
        trTag.appendChild(tdTag);

    }
    tableTag.appendChild(trTag);

}

function changeColor() {
    this.style.backgroundColor = "pink";
}
function clickFunc() {
    this.style.backgroundColor = 'yellow';
}
function originColor(){
    this.style.backgroundColor = '';
}
function deleteRow(){
    let id = this.parentNode.parentNode.childNodes[0].childNodes[0]
    console.log
    this.parentNode.parentNode.remove();

//실제 데이터 삭제
    // for(let i =0; i < data.length; i++){
    //     if(data[i].id == parseInt(id)){
    //         data.splice(i,1);
    //         break;
    //     }
    // }
}
function modRow() {
    let id = document.getElementById('id').value;  // Id항목의 id의 value속성.

    let findTr = document.getElementById(id);
    findTr.childNodes[1].childNodes[0].nodeValue = document.getElementById('first_name').value;
    findTr.childNodes[2].childNodes[0].nodeValue = document.getElementById('last_name').value;
    findTr.childNodes[3].childNodes[0].nodeValue = document.getElementById('email').value;
    findTr.childNodes[4].childNodes[0].nodeValue = document.getElementById('gender').value; 
}
function addRow(){ //테이블 행 추가
    let id = document.getElementById('id').value;
    let first_name = document.getElementById('first_name').value;
    let last_name = document.getElementById('last_name').value;
    let email = document.getElementById('email').value;
    let gender = document.getElementById('gender').value;
    let ip_address=null;
    let ary =[id, first_name, last_name,email,gender,ip_address];
    
    let trTag = document.createElement('tr');
    
    for(let f of ary){
        let tdTag = document.createElement('td');
        let text = document.createTextNode(f);
        tdTag.appendChild(text);
        trTag.appendChild(tdTag);
       
    }
    let btn = document.createElement('button');
        btn.onclick = deleteRow;
        let text = document.createTextNode('삭제');
        btn.appendChild(text);
        let tdTag = document.createElement('td');
        tdTag.appendChild(btn)
        trTag.appendChild(tdTag);
    
        document.getElementsByTagName('table')[0].appendChild(trTag)
    }
    
 
function showDetail(){
    let inputs = document.getElementsByTagName('input');
    console.log(inputs);
    for(let i =0; i < inputs.length; i++){
        inputs[i].value= this.childNodes[i].childNodes[0].nodeValue;
    }
   
    
    
    // let id = this.childNodes[0].childNodes[0].nodeValue;
    // let fn = this.childNodes[1].childNodes[0].nodeValue;
    // let ln = this.childNodes[2].childNodes[0].nodeValue;
    // let em = this.childNodes[3].childNodes[0].nodeValue;
    // let ge = this.childNodes[4].childNodes[0].nodeValue;

    //  id = document.getElementById('id').value=id;
    //  first_name = document.getElementById('first_name').value=fn;
    //  last_name = document.getElementById('last_name').value=ln;
    //  email = document.getElementById('email').value=em;
    //  gender = document.getElementById('gender').value=ge;

}