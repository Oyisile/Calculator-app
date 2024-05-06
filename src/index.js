
    const sumInput = document.querySelector("#calculation-input");

function callNumber(input) {
 sumInput.value += input;
  }

let buttonSeven = document.querySelector(".seven-button");
buttonSeven.addEventListener("click", callNumber);