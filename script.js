const keys = document.querySelectorAll(".key");
//For each ".key" element add two event listeners.
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
  key.addEventListener("click", handleClick);
});

//When key is clicked play audio.
function handleClick() {
  //Add the "data-key" value of clicked key to a variable.
  const keyCode = this.getAttribute("data-key");
  //Add the audio element with the "data-key" that matches the keyCode to an "audio" variable.
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  if (!audio) return; //Stop the function from running if audio is missing.
  audio.currentTime = 0; //Rewind to start
  audio.play();
  this.classList.add("playing"); //Add a "playing" class to clicked key to add custom styling.
}

//Add event listener to page that calls playSound fucntion when a key is pressed down.
window.addEventListener("keydown", playSound);

function playSound(e) {
  //Match the event (whichever key is pressed) to the ".key" and "audio" elements with the same keycode.
  //E.g press "s" and find "audio" and ".key" element with "s" as a "data-key" attribute value.
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //Stop the function from running from running if audio is missing.
  audio.currentTime = 0; //Rewind to start
  audio.play();
  key.classList.add("playing"); //Add a "playing" class to clicked key to add custom styling.
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; //Skip it if its not a transform property
  this.classList.remove("playing");
}
