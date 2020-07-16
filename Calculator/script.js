let myDisplay = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");

const add = (a, b) => a + b;

const subtract = (a, b) => a-b;

const multiply = (a, b) => a*b;

const divide = (a, b)=> a/b;

function operate(operator, numOne, numTwo){
    let result = 0;
    switch(operator){
        case '+':
            result = add(numOne, numTwo);
            break;
        case '/':
            result = divide(numOne, numTwo);
            break;
        case '-':
            result = subtract(numOne, numTwo);
            break;
        case '*':
            result = multiply(numOne, numTwo);
            break;
        default:
            result = NaN;
            break;
    }
}

//function that updates the display when a number is entered
function updateDisplay(buttonString, buttonAction){
    if(myDisplay.textContent === "0" && buttonAction === "number"){
        myDisplay.textContent = buttonString;
    }
    else{
        myDisplay.textContent += buttonString;
    }
}

function evaluateExpression(expression){
    console.log(expression);
}

//function that runs the calculator buttons
function evaluateButton(e){
    let action = this.dataset.action;
    if(action === "equals"){
        evaluateExpression(myDisplay.textContent);
    }
    else if(action === "clear"){
        myDisplay.textContent = "0";
    }
    else{
        updateDisplay(this.textContent, action);
    }
}

numberButtons.forEach(button => button.addEventListener('click', evaluateButton));
operatorButtons.forEach(button => button.addEventListener('click', evaluateButton));



