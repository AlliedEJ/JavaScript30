const secondHand = document.querySelector(`.second-hand`);
const minuteHand = document.querySelector(`.min-hand`);
const hourHand = document.querySelector(`.hour-hand`);

function setDate () {
  let currentTime = new Date();
  let seconds = currentTime.getSeconds();
  let secondsDegrees = (seconds * 6) + 90; //Plus 90 to offset the original 90 degree rotation starting point
  let minutes = currentTime.getMinutes();
  let minutesDegrees = (minutes * 6) + 90;
  let hours = currentTime.getHours();
  let hoursDegrees = (hours * 30) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
setInterval(setDate, 1000);