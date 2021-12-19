// const clock = document.getElementById("clock");
const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;   //Element.innerText --> element 안의 text 값들만 가져옴.
}

getClock();     //1초 기다리지 않고 바로 시계 표시
setInterval(getClock, 1000);    //1000 = 1초
//setTimeout(sayHello, 5000);

// padStart(2, "0");   //string에 padding을 해주는 코드 2 --> string 자릿 수 "0" --> 조건에 안 맞을 시 padding으로 추가하는 string
// padEnd(2, "0")      //조건(string == 2자리 수 이상)에 안 맞을 시 뒤에 "0"을 추가함
