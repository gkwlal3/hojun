//event.js
console.log(this);
createElements()
function changeValue() {
    //id="num" value속성을 읽어와서 그 값의 upperCase 변환.
    let elem = document.getElementById('num3').value;
    console.log(elem);
    document.getElementById('num3').value = elem.toUppercase();
}

let obj = {
    name: "hong",
    hobby: ["running", "eating", "sleeping"],
    pet: [{
        dog: "뚱순이"
    }, {
        cat: "야옹이"
    }, {
        cockroach: "바킈"
    }]
}
console.log(obj.name);
console.log(obj.hobby[0]);
console.log(obj['hobby'][1]);
console.log(obj.pet[0].dog);
console.log(obj.pet[1].cat);

//요소를 생성
let fruits = ['Apple', 'Orange', 'Mango', 'Melone'];

function addFruit(){
    let addval =document.getElementById('add').value;
    fruits[fruits.length] = addval;
    document.getElementById('add').value=null;
    removeFromDoc();
    createElements();
}

function createElements() {
    let ulTag = document.createElement('ul');
    ulTag.setAttribute('id', 'fruit');

    for (let fruit of fruits) {
        let liTag = document.createElement('li'); // <li>apple</li>
        liTag.appendChild(document.createTextNode(fruit));
        ulTag.appendChild(liTag);
    }
    document.body.appendChild(ulTag)
}
function removeFromDoc(){
    if(document.getElementById('fruit')){
    document.getElementById('fruit').remove();
    }
}


// liTag.appendChild(apple);
// ulTag[0].appendChild(liTag);
// liTag = document.createElement('li')
// let orange = document.createTextNode('orange');