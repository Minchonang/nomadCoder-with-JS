// 빈 자리수에 "0"을 채워넣는 함수

const clock = document.querySelector("#clock");
// let 변수 초기화
let hours, minutes, seconds;

function getClock() {
   const date = new Date();
   let hours = String(date.getHours()).padStart(2, "0");
   let minutes = String(date.getMinutes()).padStart(2, "0");
   let seconds = String(date.getSeconds()).padStart(2, "0");
   
   clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

getClock();
setInterval(getClock, 1000);
