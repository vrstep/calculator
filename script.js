const buttonContainer = document.querySelector(".btn-container");
const numberButtons = buttonContainer.querySelectorAll(".number");
const operatorButtons = buttonContainer.querySelectorAll(".operator");

let operator = "";
let firstOperand = "";
let secondOperand = "";

numberButtons.forEach((numberButton) => {
    numberButton.addEventListener("click", (e) => {
        if (firstOperand === "" || operator === "") {
            firstOperand = e.target.textContent;
            console.log(firstOperand);
        } else {
            secondOperand = e.target.textContent;
            console.log(secondOperand);
        }
    });
});

operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener("click", (e) => {
        operator = e.target.textContent;
        console.log(operator);
    });
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
