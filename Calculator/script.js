/*Global Variables*/
let myDisplay = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
let calculator = {firstVal:0, secondVal:0, operator:"", index:0,};

/* Basic Math Functions */
const add = () => calculator.firstVal + calculator.secondVal;

const subtract = () => calculator.firstVal - calculator.secondVal;

const multiply = () => calculator.firstVal * calculator.secondVal;

const divide = ()=> calculator.firstVal / calculator.secondVal;

//function to determine which operation to perform
function operate(){
    let result = 0;
    switch(calculator.operator){
        case 'add':
            result = add();
            break;
        case 'divide':
            result = divide();
            break;
        case 'subtract':
            result = subtract();
            break;
        case 'multiply':
            result = multiply();
            break;
        default:
            result = NaN;
            break;
    }

    return result;
}

//function that updates the display when a number is entered
function updateDisplay(buttonString, buttonAction){
    if(myDisplay.textContent === "0" && buttonAction === "number"){
        myDisplay.textContent = buttonString;
    }
    else if(buttonAction !== "number"){
        calculator.firstVal = Number(myDisplay.textContent);
        calculator.index = myDisplay.textContent.length + 1;
        calculator.operator = buttonAction;
        myDisplay.textContent += buttonString;
        console.log(calculator.firstVal);
        console.log(calculator.operator);
    }
    else{
        myDisplay.textContent += buttonString;
    }
}

function evaluateExpression(expression){
    //find the second number and set it in secondVal of object
    calculator.secondVal = Number(expression.substring(calculator.index));
    let result = operate();
    //get the answer and display it
    myDisplay.textContent = result.toString();
    //reset everything, firstVal will be the result
    calculator.firstVal = result;
    calculator.secondVal = 0;
    calculator.index = 0;
    calculator.operator = "";
}

//function that runs the calculator buttons
function evaluateButton(e){
    let action = this.dataset.action;
    if(action === "equals"){
        evaluateExpression(myDisplay.textContent);
    }
    else if(action === "clear"){
        myDisplay.textContent = "0";
        calculator.operator = "";
        calculator.firstVal = 0;
        calculator.secondVal = 0;
        calculator.index = 0;
    }
    else{
        updateDisplay(this.textContent, action);
    }
}

// add event listeners to the buttons
numberButtons.forEach(button => button.addEventListener('click', evaluateButton));
operatorButtons.forEach(button => button.addEventListener('click', evaluateButton));



