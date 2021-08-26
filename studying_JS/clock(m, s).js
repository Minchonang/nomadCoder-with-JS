const clock = document.querySelector("#clock");
// let 변수 초기화
let hours, minutes, seconds;

function getClock() {
   const date = new Date();
   let hours = date.getHours();
   let minutes = date.getMinutes();
   let seconds = date.getSeconds();
   
   clock.innerText = `${hours} : ${minutes} : ${seconds}`;

   if (minutes > 10 && seconds < 10) {
      clock.innerText = `${hours} : ${minutes} : 0${seconds}`;
   }

   if (minutes < 10 && seconds > 10) {
      clock.innerText = `${hours} : 0${minutes} : ${seconds}`;
   }

   if (seconds < 10 && minutes < 10){
      clock.innerText = `${hours} : 0${minutes} : 0${seconds}`;
   }
}

getClock();
setInterval(getClock, 1000);

