function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

let num1 = 0;
let num2 = 0;
let operator = null;

function operate(num1, operator, num2) {
  if (operator === "add") return add(num1, num2);
  if (operator === "subtract") return subtract(num1, num2);
  if (operator === "multiply") return multiply(num1, num2);
  if (operator === "divide") return divide(num1, num2);
}

let display = "";

let numButtons = document.querySelectorAll(".number");
numButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    display += event.target.id;
  });
});

document.addEventListener("click", () => {
  document.querySelector("#display").textContent = display;
});

let operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    operator = event.target.id;
    num1 = display;
    display = "";
  });
});

let equalButton = document.querySelector("#equal");
equalButton.addEventListener("click", () => {
  num2 = display;
  display = operate(+num1, operator, +num2);
});

let clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
  display = "";
  num1 = 0;
  num2 = 0;
  operator = null;
})