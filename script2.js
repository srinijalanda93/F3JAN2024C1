const hourInput = document.getElementById("hour");
const minuteInput = document.getElementById("minute");
const secondInput = document.getElementById("second");
const startButton = document.querySelector("button");
const divTimeDisplay = document.querySelector(".time-display");
const secobj = document.querySelector(".active-box");
let intervalIds = [];

function toggleH2Tag() {
  const h2Tag = divTimeDisplay.querySelector("h2");
  if (intervalIds.length === 0) {
    h2Tag.style.display = "inline";
    divTimeDisplay.classList.add("time-display");
  } else {
    h2Tag.style.display = "none";
    divTimeDisplay.classList.remove("time-display");
  }
}

startButton.addEventListener("click", function () {
  const hours = parseInt(hourInput.value) || 0;
  const minutes = parseInt(minuteInput.value) || 0;
  const seconds = parseInt(secondInput.value) || 0;
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;
  let currentSeconds = totalSeconds;

  const divTag = document.createElement("div");
  divTag.className = "active-timer";
  divTimeDisplay.appendChild(divTag);

  function updateTimerDisplay() {
    const displayHours = Math.floor(currentSeconds / 3600);
    const displayMinutes = Math.floor((currentSeconds % 3600) / 60);
    const displaySeconds = currentSeconds % 60;

    divTag.innerHTML = `
          <h2>Time Remaining:  </h2>
          <p>${displayHours}:${displayMinutes}:${displaySeconds}</p>
          <button>Stop</button>
        `;

    const stopbtn = divTag.querySelector("button");
    stopbtn.addEventListener("click", function () {
      clearInterval(intervalId);
      divTag.remove();
      toggleH2Tag();
    });

    if (currentSeconds === 0) {
      clearInterval(intervalId);
      const h2Tags = divTag.querySelector("h2");
      const pTag = divTag.querySelector("p");
      const btn1 = divTag.querySelector("button");
      h2Tags.style.display = "none";
      pTag.style.display = "none";
      btn1.style.display = "none";
      divTag.classList.remove("active-timer");
      divTag.classList.add("timeupdiv");
      divTag.innerHTML +=
        "<p class='timeup'>Time's up!</p><button class='remove'>remove</button>";

      const remove1 = divTag.querySelector(".remove");
      remove1.addEventListener("click", () => {
        divTag.remove();
        toggleH2Tag();
      });
    } else {
      currentSeconds--;
    }

    toggleH2Tag();
  }

  const intervalId = setInterval(updateTimerDisplay, 1000);
  intervalIds.push(intervalId);
});

// Function to stop a specific timer
function stopTimer(index) {
  clearInterval(intervalIds[index]);
  intervalIds.splice(index, 1);
  toggleH2Tag();
}
