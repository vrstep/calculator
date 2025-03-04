const buttonContainer = document.querySelector(".btn-container");
const numberButtons = buttonContainer.querySelectorAll(".number");
const operatorButtons = buttonContainer.querySelectorAll(".operator");
let displayResultMain = document.querySelector(".resultt-main");
let displayPreviewResult = document.querySelector("#result-preview");
const displayFirstOperand = document.querySelector(".first-operand");
const displaySecondOperand = document.querySelector(".second-operand");
const equalsButton = document.querySelector("#equal");

let operator = null;
let firstOperand = null;
let secondOperand = "";

let arithmetic = [];

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
    
    displayResultMain.textContent = addArithmetic(num);

    displayPreviewResult.textContent = operate(firstOperand, secondOperand, operator);
}

function getOp(op) {
    if (operator === null) {
        firstOperand = secondOperand;
    } else if (firstOperand !== null) {
        firstOperand = operate(firstOperand, secondOperand, operator);
    }

    operator = op;
    secondOperand = "";
    displayResultMain.textContent = addArithmetic(operator);
    console.log("finish")
}

function addArithmetic(target) {
    arithmetic.push(target);
    return result = arithmetic.join("");
}

function getLastElement(arr) {
    return arr[arr.length - 1];
}

equalsButton.addEventListener("click", () => {
    displayResultMain.textContent = operate(firstOperand, secondOperand, operator);
    displayPreviewResult.textContent = "";
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
