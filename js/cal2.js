//cal2.js
function createCal() {
    let userYear = document.getElementById('year').value;
    let userMonth = document.getElementById('month').value;

    let now = new Date(userYear, userMonth - 1,1);
    let firstDay = now.getDay();
    console.log(firstDay);

    let today =new Date(userYear, userMonth, 0);
    let year = today.getFullYear();
    let month = today.getMonth() +1;
    let date = today.getDate();
    
    console.log(`년도: ${year},월: ${month},일:${date}`);

    let days = ['sun','mon','tue','Wed','thr','fri','sat'];
    let all = "<table border = '1'><tr>";
    for(let i =0; i<days.length;i++){
        if(i % 7 ==0){
            all += "<td>"+ days[i]+"</td>"
        }else if(i % 7 ==5){
            all += "<td>"+ days[i]+"</td>"
        }else{
            all += "<td>"+ days[i]+"</td>"
        }
}
all+= "</tr>";
for(let i=0; i<firstDay; i++){
    all += "<td></td>";
}
for(let i=0; i<firstDay; i++){
    all += "<td></td>";
}
for (let i = 1; i <= date; i++) {
    if ((firstDay+i-1) == 0) { //일요일은 빨간색.
        all += "<td>" + i + "</td>";
    } else if ((firstDay+i-1) % 7 == 6) { // 토요일 줄바꿈.
        all += "<td>" + i + "</td></tr><tr>"
    } else { //정상적으로 출력
        all += "<td>" + i + "</td>"
    }
}
all+="</tr></table>";
document.write(all);
}