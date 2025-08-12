let use24Hour = false; // Start with 12-hour format

function formatTimePart(number) {
  return number < 10 ? '0' + number : number;
}

function showTime() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  let period = '';

  if (!use24Hour) {
    period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;
  }

  const timeText = `${formatTimePart(hours)}:${formatTimePart(minutes)}:${formatTimePart(seconds)} ${use24Hour ? '' : period}`;
  const dateText = now.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  document.getElementById('time').textContent = timeText;
  document.getElementById('date').textContent = dateText;
}

// Update clock every second
setInterval(showTime, 1000);
showTime(); // Show immediately

// Button to switch format
document.getElementById('toggle-format').addEventListener('click', () => {
  use24Hour = !use24Hour;
  document.getElementById('toggle-format').textContent = use24Hour
    ? 'Switch to 12-Hour'
    : 'Switch to 24-Hour';
  showTime();
});

// Button to toggle theme
document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('light');
});
