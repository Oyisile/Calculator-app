
    const sumInput = document.querySelector("#calculation-input");

function callNumber(input) {
 sumInput.value += input;
  }

function clearDisplay() {
    sumInput.value = "";
}

function calculate() {
    sumInput.value = eval(sumInput.value);
}