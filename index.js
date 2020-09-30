//Variables
const textContainer = document.getElementById("text-container");
const userInputField = document.getElementById("user-input");

//Functions
function appendLetter() {
  textContainer.innerHTML = ""
  userInput = userInputField.value
  userInput.split("").forEach( char => textContainer.innerHTML += alphabet[char.toLowerCase()] || "" )
}

window.onload = function() {
  Particles.init({
    selector: '.background'
  });
};


//Event Listeners
userInputField.addEventListener("input", appendLetter)
