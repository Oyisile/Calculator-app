
function callNumber(button) {
    let sumInput = document.querySelector("#calculation-input");
    sumInput.innerHTML = button.value;
}
let numberSeven = document.querySelector(".seven-button");
numberSeven.addEventListener("click", callNumber);
