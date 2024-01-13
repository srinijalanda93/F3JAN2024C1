document.addEventListener("DOMContentLoaded", function () {
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

      //add the class to divTimeDisplay to make all h2,p,btn1 proper alignment
      //divTimeDisplay.classList.add("timedisplay");

      divTimeDisplay.innerHTML = `
        <h2>Time Remaining  </h2>
        <p class='pstyle'>${displayHours}:${displayMinutes}:${displaySeconds}</p>
        <button class='button-stop'>Stop</button>
        `;
        const stopbtn=divTimeDisplay.querySelector(".button-stop");
        stopbtn.addEventListener("click", function () {
            clearInterval(intervalId);
            divTimeDisplay.remove();
          }); 

      if (currentSeconds === 0) {
        clearInterval(intervalId);
        divTimeDisplay.classList.remove("timedisplay");
        const h2Tags = divTimeDisplay.querySelector("h2");
        const pTag = divTimeDisplay.querySelector("p");
        const btn1 = divTimeDisplay.querySelector("button");
        h2Tags.style.display = "none";
        pTag.style.display = "none";
        btn1.style.display = "none";

        //adding new class and removing the class
        divTimeDisplay.classList.remove("time-display");
        divTimeDisplay.classList.add("timeupdiv");
        divTimeDisplay.innerHTML += "<p class='timeup'>Time's up!</p>";

        // Add audio play functionality here
        // For example: new Audio('path-to-your-audio-file.mp3').play();
      } else {
        currentSeconds--;
      }
    }

    // Clear any existing intervals
    clearInterval(intervalId);

    // Update the display every second
    intervalId = setInterval(updateTimerDisplay, 1000);
  });
});
