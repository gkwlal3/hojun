// variable.js
let age = 10;
console.log(age);

age = 20;
console.log(age);

const PI = 3.1452 //상수: 재할당이 불가능
//PI =3.2;

{
    let age = 30;
    console.log(age);
}

console.log(age);
let v1; //undefined
v1 = 'Hello'; //string
v1 = 300.25; //number
v1 = true; //boolean
v1 = null; //object
vi = [1, 2, 3]; //object
v1 = {
    name: 'Song',
    age: 20,
    score: 80
} //object
v1= function (a,b){
    return a+b;
}
console.log(typeof v1);
console.log(v1(10,20));
vi = 10>20;
v1 = null; // 0,null,false => 거짓, 값이있으면 참
if(v1){
    console.log('참');
}else{
    console.log('거짓입니다')
}
