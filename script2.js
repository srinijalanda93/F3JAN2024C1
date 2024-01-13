const hourInput = document.getElementById("hour");
const minuteInput = document.getElementById("minute");
const secondInput = document.getElementById("second");
const startButton = document.querySelector("button");
const divTimeDisplay = document.querySelector(".time-display");

let intervalId;
startButton.addEventListener("click", function () {
    const hours = parseInt(hourInput.value) || 0;
    const minutes = parseInt(minuteInput.value) || 0;
    const seconds = parseInt(secondInput.value) || 0;
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    let currentSeconds = totalSeconds;

    function updateTimerDisplay() {
      const displayHours = Math.floor(currentSeconds / 3600);
      const displayMinutes = Math.floor((currentSeconds % 3600) / 60);
      const displaySeconds = currentSeconds % 60;
      const h2Tag = divTimeDisplay.querySelector("h2");
      h2Tag.style.display = "none";

      

      if (currentSeconds === 0) {
        clearInterval(intervalId);
      } else {
        currentSeconds--;
      }
    }

    // Clear any existing intervals
    clearInterval(intervalId);
    // Update the display every second
    intervalId = setInterval(updateTimerDisplay, 1000);
  });
