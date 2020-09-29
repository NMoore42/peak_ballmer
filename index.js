//Variables
const textContainer = document.getElementById("text-container");
const userInputField = document.getElementById("user-input");

//Functions
function appendLetter() {
  textContainer.innerHTML = ""
  userInput = userInputField.value
  userInput.split("").forEach( char => textContainer.innerHTML += alphabet[char.toLowerCase()])
}

//Event Listeners
userInputField.addEventListener("input", appendLetter)
