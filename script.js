const buttonContainer = document.querySelector(".btn-container");
const numberButtons = buttonContainer.querySelectorAll(".number");
const operatorButtons = buttonContainer.querySelectorAll(".operator");
const displayFirstOperand = document.querySelector(".first-operand");
const displaySecondOperand = document.querySelector(".second-operand");
const equalsButton = document.querySelector("#equal");

let operator = null;
let firstOperand = null;
let secondOperand = "";

numberButtons.forEach(button => {
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
    } else if (firstOperand !== null) {
        firstOperand = operate(firstOperand, secondOperand, operator);
    }

    displayFirstOperand.textContent = firstOperand + " " + op;
    operator = op;
    secondOperand = "";
    displaySecondOperand.innerHTML = "0";
}

equalsButton.addEventListener("click", () => {
    console.log(operate(firstOperand, secondOperand, operator));
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
