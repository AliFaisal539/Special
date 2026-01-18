/* COUNTDOWN SINCE BIRTH */
const birthDate = new Date("2006-01-19T00:00:00");

function updateCountdown(){
  const now = new Date();
  let diff = now - birthDate;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours   = Math.floor(minutes / 60);
  const days    = Math.floor(hours / 24);

  const years = Math.floor(days / 365.25);
  const months = Math.floor((days % 365.25) / 30.44);
  const remainingDays = Math.floor((days % 365.25) % 30.44);

  document.getElementById("years")?.innerText = years;
  document.getElementById("months")?.innerText = months;
  document.getElementById("days")?.innerText = remainingDays;
  document.getElementById("hours")?.innerText = hours % 24;
  document.getElementById("minutes")?.innerText = minutes % 60;
  document.getElementById("seconds")?.innerText = seconds % 60;
}

setInterval(updateCountdown,1000);
updateCountdown();

/* CANDLE BLOW */
function blowCandle(){
  const candle = document.getElementById("candle");
  if(candle){
    candle.classList.add("off");
    alert("✨ Her wish is floating into the universe ✨");
  }
}
