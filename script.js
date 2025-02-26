const buttonContainer = document.querySelector(".btn-container");
const numberButtons = buttonContainer.querySelectorAll(".number");
const operatorButtons = buttonContainer.querySelectorAll(".operator");
const mainDisplay = document.querySelector("#display");
const equalsButton = document.querySelector("#equal");

let operator = null;
let firstOperand = null;
let secondOperand = "";


function calculate(firstOperand, secondOperand) {
    result = operate(firstOperand, secondOperand);
    firstOperand = result;
    secondOperand = 0;
}

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", (e) => {
        operator = e.target.textContent;
    });
});

equalsButton.addEventListener("click", () => {
    console.log(operate(firstOperand, secondOperand, operator));
});

// function renderFirstOperand(firstOperand) {
//     return (mainDisplay.textContent = firstOperand);
// }

// function renderSecondOperand(secondOperand) {
//     return (mainDisplay.textContent = secondOperand);
// }

// function renderOperator(operator) {
//     return (mainDisplay.textContent += operator);
// }



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
