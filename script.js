<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Live Birthday Timer</title>
<style>
  body {
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 50px;
    background: #f9f9f9;
    color: #333;
  }
  h1 { margin-bottom: 30px; }
  .countdown span {
    font-size: 2rem;
    margin: 0 10px;
    display: inline-block;
    min-width: 50px;
  }
</style>
</head>
<body>

<h1>🎉 Live Age Timer 🎉</h1>

<div class="countdown">
  <span id="years">0</span> Years
  <span id="months">0</span> Months
  <span id="days">0</span> Days
  <br><br>
  <span id="hours">0</span> Hours
  <span id="minutes">0</span> Minutes
  <span id="seconds">0</span> Seconds
</div>

<script>
const birthDate = new Date("2006-01-19T00:00:00");

// Function to calculate exact age
function updateCountdown() {
  const now = new Date();

  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  let days = now.getDate() - birthDate.getDate();
  let hours = now.getHours() - birthDate.getHours();
  let minutes = now.getMinutes() - birthDate.getMinutes();
  let seconds = now.getSeconds() - birthDate.getSeconds();

  // Fix negative values
  if (seconds < 0) { seconds += 60; minutes--; }
  if (minutes < 0) { minutes += 60; hours--; }
  if (hours < 0) { hours += 24; days--; }
  if (days < 0) {
    const prevMonthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    days += prevMonthDays;
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

// Start the timer
setInterval(updateCountdown, 1000);
updateCountdown();
</script>

</body>
</html>

