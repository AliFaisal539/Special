<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Birthday Countdown</title>
<style>
  body {
    font-family: Arial, sans-serif;
    text-align: center;
    background: #f5f5f5;
    color: #333;
    padding: 50px;
  }
  .countdown span {
    font-size: 2rem;
    margin: 0 5px;
    display: inline-block;
    min-width: 50px;
  }
  #candle {
    width: 50px;
    height: 100px;
    background: orange;
    margin: 20px auto;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
  }
  #candle.off {
    background: gray;
  }
  #candle::after {
    content: '';
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 10px;
    height: 20px;
    background: yellow;
    border-radius: 50%;
  }
  #candle.off::after {
    display: none;
  }
</style>
</head>
<body>

<h1>🎉 Birthday Countdown 🎉</h1>

<div class="countdown">
  <span id="years">0</span> Years
  <span id="months">0</span> Months
  <span id="days">0</span> Days
  <br>
  <span id="hours">0</span> Hours
  <span id="minutes">0</span> Minutes
  <span id="seconds">0</span> Seconds
</div>

<div id="candle" onclick="blowCandle()"></div>
<p>Click the candle to blow it out!</p>

<script>
/* COUNTDOWN SINCE BIRTH */
const birthDate = new Date("2006-01-19T00:00:00");

function updateCountdown() {
  const now = new Date();

  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  let days = now.getDate() - birthDate.getDate();
  let hours = now.getHours() - birthDate.getHours();
  let minutes = now.getMinutes() - birthDate.getMinutes();
  let seconds = now.getSeconds() - birthDate.getSeconds();

  // Adjust negative values
  if (seconds < 0) { seconds += 60; minutes--; }
  if (minutes < 0) { minutes += 60; hours--; }
  if (hours < 0) { hours += 24; days--; }
  if (days < 0) {
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    days += prevMonth;
    months--;
  }
  if (months < 0) { months += 12; years--; }

  // Update DOM
  document.getElementById("years").innerText = years;
  document.getElementById("months").innerText = months;
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

/* CANDLE BLOW */
function blowCandle() {
  const candle = document.getElementById("candle");
  if (candle && !candle.classList.contains("off")) {
    candle.classList.add("off");
    alert("✨ Her wish is floating into the universe ✨");
  }
}
</script>

</body>
</html>
