//event.js
console.log(this);
function changeValue(){
    //id="num" value속성을 읽어와서 그 값의 upperCase 변환.
    let elem =document.getElementById('num3').value;
    console.log(elem);
        document.getElementById('num3').value = elem.toUppercase();
}

let obj = {
    name :"hong",
    hobby: ["running","eating", "sleeping"],
    pet:[{
        dog: "뚱순이"
    },{
        cat:"야옹이"
    },{
        cockroach: "바킈"
    }]
}
console.log(obj.name);
console.log(obj.hobby[0]);
console.log(obj['hobby'][1]);
console.log(obj.pet[0].dog);
console.log(obj.pet[1].cat);

//요소를 생성
function createElements(){
let fruits = ['Apple', 'Orange', 'Mango', 'Melone'];
let ulTag = document.getElementsByTagName('ul'); //document ul태그를 찾아
for(let fruit of fruits){
    let liTag = document.createElement('li'); // <li>apple</li>
    let m = document.createTextNode(fruit); 
    liTag.appendChild(m);
    ulTag[0].appendChild(liTag);
    }
}
// liTag.appendChild(apple);
// ulTag[0].appendChild(liTag);

// liTag = document.createElement('li')
// let orange = document.createTextNode('orange');