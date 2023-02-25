// get references to the divs
const joining = document.getElementById("joining");
const started = document.getElementById("started");
const ended = document.getElementById("ended");
const countEl = document.getElementById("count-w").innerHTML;
const pricew = document.getElementById("price-w").innerHTML;





// set the countdown timer
let countdown = 10;
const countdownEl = document.getElementById("countdown");
countdownEl.textContent = countdown;

const intervalId = setInterval(() => {
  countdown--;
  countdownEl.textContent = countdown;
  
  // when the countdown reaches 0, stop the interval and start the bidding
  if (countdown === 0) {
    clearInterval(intervalId);
    startWhenCountdownEnds();
    joining.style.display = "none";
    started.style.display = "block";
    function startWhenCountdownEnds() {
        // get elements from the HTML
const countEl = document.getElementById("count-w");
const timerEl = document.getElementById("timer-w");
const winningEl = document.getElementById("winning-w");
const bidBtn = document.getElementById("btn-w");
const myButton = document.querySelector('#btn-w');
const clickSound = document.querySelector('#click-sound');

// initialize count and timer
let count = 0;
let timer = 600;

const progressBar = document.querySelector('.progress');
const intervalId = setInterval(() => {
  count++;
  if (count > 1000) {
    clearInterval(intervalId); // stop when progress reaches 100%
  } else {
    const newWidth = progressBar.style.width
      ? parseFloat(progressBar.style.width) + 0.2
      : 0.2; // start with 0.1% width
    progressBar.style.width = `${newWidth}%`;
  }
}, 100); // update every 100 milliseconds


// function to update the count and winning name
function updateCountAndWinning() {
  // increment count
  count++;

 // format the count with the "₦" symbol
 const formattedCount = "₦" + count.toString();

 // format the count with the "₦" symbol
 if (formattedCount === "₦1000") {
    started.style.display = "none";
    ended.style.display = "block";
  }


 // update the count element with the formatted count
 countEl.textContent = formattedCount;

  // add event listener to bid button to check for clicks
  bidBtn.addEventListener('click', () => {
    winningEl.textContent = "batman";
  });

  // if the bid button is not clicked, show a random name
  const names = ["fala69","chinedu", "juliet", "richmond20", "charlie", "davis"];
  const randomIndex = Math.floor(Math.random() * names.length);
  winningEl.textContent = names[randomIndex];

  // play the sound
  const audio = new Audio("outbid.mp3");
  audio.pause();
}

// function to update the timer
function updateTimer() {
  // decrease timer by 1 second
  timer--;

  // convert timer to minutes and seconds
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  // format minutes and seconds with leading zeros
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  // update timer element with the formatted time
  timerEl.textContent = `${formattedMinutes}:${formattedSeconds}`;
}

// call updateCountAndWinning every 0.05 seconds
setInterval(updateCountAndWinning, 100);

// call updateTimer every second (1000 milliseconds)
setInterval(updateTimer, 1000);



// Button Button Button Button Button Button
myButton.addEventListener('click', () => {
  var audio = new Audio("bid.mp3");
  audio.play();
  myButton.classList.add("clicked");

  setTimeout(function () {
    myButton.classList.remove("clicked");
  }, 1000);

  // Add the 'active' class to the button when it's clicked
  myButton.setAttribute('id', 'my-button-active');

  // Remove the 'active' class after 1 second to reset the button's state
  setTimeout(() => {
    myButton.setAttribute('id', 'btn-w');
  }, 1000);
});  
    }
  }
}, 1000);





const names = ["batman","fala69","chinedu", "juliet", "richmond20", "charlie", "davis"];
const joinedW = document.getElementById('joined-w');

setInterval(() => {
  const randomIndex = Math.floor(Math.random() * names.length);
  joinedW.textContent = names[randomIndex];
}, 3000);