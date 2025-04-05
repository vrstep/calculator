const buttonContainer = document.querySelector(".btn-container");
const numberButtons = buttonContainer.querySelectorAll(".number");
const operatorButtons = buttonContainer.querySelectorAll(".operator");
const displayFirstOperand = document.querySelector(".first-operand");
const displaySecondOperand = document.querySelector(".second-operand");
const displayCalculation = document.querySelector("#display-calculation");
const equalsButton = document.querySelector("#equal");
const clearButton = document.querySelector("#clear-btn");

let operator = null;
let firstOperand = null;
let secondOperand = "";
let calculationResult = 0;
let justCalculated = false;

numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    getNum(e.target.textContent);
  });
});

operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener("click", (e) => {
    getOp(e.target.textContent);
  });
});

function getNum(num) {
  if (justCalculated) {
    firstOperand = null; // Reset only after calculation
    calculationResult = 0;
    displayCalculation.textContent = "";
    justCalculated = false; // Clear flag
  }

  secondOperand += num;
  secondOperand = parseFloat(secondOperand);
  displaySecondOperand.textContent = secondOperand;
  displayCalculation.textContent = "";
}

function getOp(op) {
  if (justCalculated) {
    justCalculated = false; // Clear flag but keep the result as firstOperand
  }

  if (operator === null) {
    firstOperand = secondOperand || firstOperand;
  } else if (secondOperand === "") {
    displayFirstOperand.textContent = firstOperand + " " + op;
    operator = op;
    return;
  } else if (firstOperand !== null) {
    firstOperand = operate(firstOperand, secondOperand, operator);
  }

  displayFirstOperand.textContent = firstOperand + " " + op;
  operator = op;
  secondOperand = "";
  displaySecondOperand.innerHTML = "0";
  displayCalculation.textContent = "";
}

equalsButton.addEventListener("click", () => {
  if (secondOperand && operator) {
    calculationResult = operate(firstOperand, secondOperand, operator);
    displayCalculation.textContent = calculationResult;

    firstOperand = calculationResult; // Allow chaining
    secondOperand = "";
    operator = null;

    displayFirstOperand.textContent = "";
    displaySecondOperand.textContent = "";

    justCalculated = true; // Set the flag
  }
});

clearButton.addEventListener("click", () => {
  reset();
});

function reset() {
  operator = null;
  firstOperand = null;
  secondOperand = "";
  calculationResult = 0;

  displayCalculation.textContent = "";
  displayFirstOperand.textContent = "";
  displaySecondOperand.textContent = "";
}

function operate(firstOperand, secondOperand, operator) {
  switch (operator) {
    case "+":
      return add(firstOperand, secondOperand);

    case "-":
      return substract(firstOperand, secondOperand);

    case "*":
      return multiply(firstOperand, secondOperand);

    case "/":
      return divide(firstOperand, secondOperand);
  }
}

function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
