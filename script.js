const birthDate = new Date("2006-01-19T00:00:00");

setInterval(()=>{
  const now = new Date();
  let diff = now - birthDate;

  let seconds = Math.floor(diff/1000);
  let minutes = Math.floor(seconds/60);
  let hours = Math.floor(minutes/60);
  let days = Math.floor(hours/24);
  let months = Math.floor(days/30);
  let years = Math.floor(months/12);

  document.getElementById("years").innerText = years;
  document.getElementById("months").innerText = months%12;
  document.getElementById("days").innerText = days%30;
  document.getElementById("hours").innerText = hours%24;
  document.getElementById("minutes").innerText = minutes%60;
  document.getElementById("seconds").innerText = seconds%60;
},1000);
