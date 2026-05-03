const clock = document.getElementById("clock");
const dateElement = document.getElementById("date");

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Date
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let dayName = days[now.getDay()];
  let day = now.getDate();
  let month = months[now.getMonth()];
  let year = now.getFullYear();

  dateElement.textContent = `${dayName}, ${day} ${month} ${year}`;

  // AM / PM
  let ampm = hours >= 12 ? "PM" : "AM";

  if (hours > 12) {
    hours = hours - 12;
  }

  if (hours === 0) {
    hours = 12;
  }

  // leading zero
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  // update time
  clock.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;

  // subtle color change
  if (hours >= 6 && hours < 12) {
    clock.style.color = "#22c55e"; // green
  } else if (hours >= 12 && hours < 18) {
    clock.style.color = "#f97316"; // orange
  } else {
    clock.style.color = "#38bdf8"; // blue
  }
}

setInterval(updateClock, 1000);
updateClock();
