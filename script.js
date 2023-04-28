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

function operate(num1, operator, num2) {
  if (num1 === null || operator === null || num2 === null) return 0;
  if (operator === "add") return add(num1, num2);
  if (operator === "subtract") return subtract(num1, num2);
  if (operator === "multiply") return multiply(num1, num2);
  if (operator === "divide") return divide(num1, num2);
}

let num1 = null;
let num2 = null;
let operator = null;
let result = null;
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
    num1 = display;
    operator = event.target.id;
    display = "";
  });
});

let equalButton = document.querySelector("#equal");
equalButton.addEventListener("click", () => {
  num2 = display;
  result = operate(+num1, operator, +num2);
  display = result;
  operator = null;
});

let clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
  display = "";
  num1 = null;
  num2 = null;
  operator = null;
  result = null;
});