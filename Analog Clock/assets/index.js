const hourHand = document.querySelector(".hour_hand");
const minuteHand = document.querySelector(".minute_hand");
const secondHand = document.querySelector(".second_hand");

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourAngle = (hours * 30) + (minutes * 0.5);
  const minuteAngle = (minutes * 6) + (seconds * 0.1);
  const secondAngle = (seconds * 6);

  hourHand.style.transform = `rotate(${hourAngle}deg) rotateX(180deg)`;
  minuteHand.style.transform = `rotate(${minuteAngle}deg) rotateX(180deg)`;
  secondHand.style.transform = `rotate(${secondAngle}deg) rotateX(180deg)`;
}

setInterval(updateClock, 1000);
updateClock();
