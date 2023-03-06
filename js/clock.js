const clock = document.querySelector("#clock");

function getClock(){
  const d = new Date();
  const h = String(d.getHours()).padStart(2,"0");
  const m = String(d.getMinutes()).padStart(2,"0");
  const s = String(d.getSeconds()).padStart(2,"0");
  clock.innerText = `${h}:${m}:${s}`;
}

getClock(); //맨처음에 한번 실행
setInterval(getClock, 1000); //1초 주기로 새로실행
