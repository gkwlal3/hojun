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
console.log(json);
let obj = JSON.parse(json)
console.log(obj);

for(let row of obj){
    console.log(row)
}
let tableTag = document.createElement('table');
createTable();
function createTable(){
    tableTag.setAttribute('border','1')
    for(let row of obj){
        let trTag = document.createElement('tr');
    for(let field in row){
        let tdTag = document.createElement('td');
        let text = document.createTextNode(row[field]);
        tdTag.appendChild(text);
        trTag.appendChild(tdTag);
    }
    tableTag.appendChild(trTag);
}
    document.getElementById('show').appendChild(tableTag);
}

function createHeader(){
    let trTag = document.createElement('tr');
    for(let row of obj){
        for( field in row){
        let tdTag =document.createElement('td');
        let text = document.createTextNode(field);
    }
        tdTag.appendChild(text);
    }
    trTag.appendChild(tdTag);
    tableTag.appendChild(trTag);
}   