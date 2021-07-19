
function calc(x){
    var str = document.getElementsByClassName("box3")[0].innerHTML;
    str = str+x;
    document.getElementsByClassName("box3")[0].innerHTML =str;
}
function DeleteAll(){
    document.getElementsByClassName("box3")[0].innerHTML ="";
}
function DeleteOne(){
    var str =document.getElementsByClassName("box3")[0].innerHTML;
    str = str.substring(0,str.length-1);
    document.getElementsByClassName("box3")[0].innerHTML =str;
}
function result(){
    var str=document.getElementsByClassName("box3")[0].innerHTML;
    str = eval(str);
    document.getElementsByClassName("box3")[0].innerHTML =str;
}