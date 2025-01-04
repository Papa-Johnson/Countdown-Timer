const countdown = () => {
  const countDate = new Date("February 19, 2025 23:59:59").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const timeUnits = {
    day: 1000 * 60 * 60 * 24,
    hour: 1000 * 60 * 60,
    minute: 1000 * 60,
    second: 1000
  };

  const { day, hour, minute, second } = timeUnits;
  const textDay = Math.floor(gap / day);
  const textHours = Math.floor((gap % day) / hour);
  const textMinutes = Math.floor((gap % hour) / minute);
  const textSeconds = Math.floor((gap % minute) / second);

  const paddedHours = textHours < 10 ? `0${textHours}` : textHours;
  const paddedMinutes = textMinutes < 10 ? `0${textMinutes}` : textMinutes;
  const paddedSeconds = textSeconds < 10 ? `0${textSeconds}` : textSeconds;

  document.querySelector(".days").textContent = textDay;
  document.querySelector(".hours").textContent = paddedHours;
  document.querySelector(".mins").textContent = paddedMinutes;
  document.querySelector(".secs").textContent = paddedSeconds;
};

setInterval(countdown, 1000);

