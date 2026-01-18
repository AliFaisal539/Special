// Milestone Counter (instead of live timer)
const birthDate = new Date("2006-01-19");
const milestoneEl = document.getElementById("milestone");

function calculateMilestone() {
  const now = new Date();
  const diff = now - birthDate;
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((diff / (1000 * 60 * 60 * 24 * 30)) % 12);
  const days = Math.floor((diff / (1000 * 60 * 60 * 24)) % 30);
  milestoneEl.innerText = `You've been blessing the world for ${years} years, ${months} months, and ${days} days! 💖`;
}
calculateMilestone();

// Candle Blow + Confetti
const blowBtn = document.getElementById("blow-candle");
const candle = document.getElementById("candle");
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

blowBtn.addEventListener('click', () => {
  candle.style.background = 'gray';
  launchConfetti();
});

function launchConfetti() {
  const confettis = [];
  for (let i = 0; i < 200; i++) {
    confettis.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 20 + 10,
      color: `hsl(${Math.random()*360}, 100%, 50%)`
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettis.forEach(c => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI*2);
      ctx.fillStyle = c.color;
      ctx.fill();
      c.y += c.d / 10;
      if (c.y > canvas.height) c.y = 0;
    });
    requestAnimationFrame(draw);
  }
  draw();
}
