const buttonContainer = document.querySelector(".btn-container");
const numberButtons = buttonContainer.querySelectorAll(".number");
const operatorButtons = buttonContainer.querySelectorAll(".operator");
let mainDisplay = document.querySelector("#display");

let operator = "";
let firstOperand = "";
let secondOperand = "";

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", (e) => {
        if (firstOperand === "" || operator === "") {
            firstOperand = e.target.textContent;
            renderFirstOperand(firstOperand, secondOperand);
        } else {
            secondOperand = e.target.textContent;
            renderSecondOperand(secondOperand);
            console.log(secondOperand);
        }
    });
});

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", (e) => {
        operator = e.target.textContent;
        renderOperator(operator);
        console.log(operator);
    });
});

function renderFirstOperand(firstOperand) {
    return (mainDisplay.textContent += firstOperand);
}

function renderSecondOperand(secondOperand) {
    return (mainDisplay.textContent += secondOperand);
}

function renderOperator(operator) {
    return (mainDisplay.textContent += operator);
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
