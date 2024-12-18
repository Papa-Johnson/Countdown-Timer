const countdown = () => {
  const countDate = new Date("December 31, 2024 23:59:59").getTime();
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
  let { hours: textHours, mins: textMinutes, secs: textSeconds } = {
    hours: Math.floor((gap % day) / hour),
    mins: Math.floor((gap % hour) / minute),
    secs: Math.floor((gap % minute) / second)
  };


  [textHours, textMinutes, textSeconds] = [textHours, textMinutes, textSeconds].map(unit => {
    return unit < 10 ? `0${unit}` : unit;
  });


  document.querySelector(".days").textContent = textDay;
  document.querySelector(".hours").textContent = textHours;
  document.querySelector(".mins").textContent = textMinutes;
  document.querySelector(".secs").textContent = textSeconds;
};

setInterval(countdown, 1000);