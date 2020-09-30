//Variables
const textContainer = document.getElementById("text-container");
const userInputField = document.getElementById("user-input");

//Functions
function appendLetter() {
  textContainer.innerHTML = ""
  userInput = userInputField.value.toLowerCase()
  userInput.split("").forEach( char => textContainer.innerHTML += alphabet[char] || "" )
}

function initParticles() {
  Particles.init({
    selector: '.background'
  });
}

//Event Listeners
userInputField.addEventListener("input", appendLetter)
window.addEventListener("load", initParticles)
