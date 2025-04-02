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
  secondOperand += num;
  secondOperand = parseFloat(secondOperand);
  displaySecondOperand.textContent = secondOperand;
}

function getOp(op) {
  if (operator === null) {
    firstOperand = secondOperand;
  } else if (secondOperand === "") {
    // Replace the operator if user presses a new one consecutively
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
}

equalsButton.addEventListener("click", () => {
  if (firstOperand && secondOperand && operator) {
    displayCalculation.textContent = operate(
      firstOperand,
      secondOperand,
      operator
    );
  } else return;
  displayFirstOperand.textContent = "";
  displaySecondOperand.textContent = "";
});

clearButton.addEventListener("click", () => {
  console.log("works1");
  let operator = null;
  let firstOperand = null;
  let secondOperand = "";

  displayCalculation.textContent = "";
  displayFirstOperand.textContent = "";
  displaySecondOperand.textContent = "";
});

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
