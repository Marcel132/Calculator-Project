// UPLOAD DATA FROM DOCUMENT
const userInput = document.getElementById("inputNumber");
const addBtn = document.getElementById("btn-add");
const subtractBtn = document.getElementById("btn-subtract");
const multiplyBtn = document.getElementById("btn-multiply");
const divideBtn = document.getElementById("btn-divide");
const exponentBtn = document.getElementById("btn-exponent");
const restartBtn = document.getElementById("btn-restart");

const currentCalculationOutput = document.getElementById("current-calculation");
const currentResultsOutput = document.getElementById("current-results");

function resultsOutput(result, text) {
    currentResultsOutput.textContent = result;
    currentCalculationOutput.textContent = text;
}

const defaultValue = 0; 
let currentResult = defaultValue;
let logEntries = [];

// GETS USER INPUT FROM INPUT FIELD
function getUserInput() {
    return parseInt(userInput.value);
}

// WRITE DESCRIPTION AND RESULTS
function createAndWriteLog(operators, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operators} ${calcNumber}`
    resultsOutput(currentResult,calcDescription);
}

// WRITE LOG IN DEV TOOLS
function writeLog(operationIndentify, prevResult , operationNumber, newResult) {
    const logEntry = {
        operation: operationIndentify,
        prevResult: prevResult,
        operationNumber: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries); 
}

// ADD NUMBERS FROM HTML DOCUMENT
function addNumbers() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteLog("+", initialResult, enteredNumber);
    writeLog("ADD", initialResult , enteredNumber, currentResult);
}

// SUBTRACT NUMBERS FROM HTML DOCUMENT
function subtractNumbers() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteLog("-", initialResult, enteredNumber);
    writeLog("SUBTRACT", initialResult , enteredNumber, currentResult);
}

// MULTIPLY NUMBERS FROM HTML DOCUMENT
function multiplyNumbers() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteLog("*", initialResult, enteredNumber);
    writeLog("MULTIPLY", initialResult , enteredNumber, currentResult);
}

// DIVIDE NUMBERS FROM HTML DOCUMENT
function divideNumbers() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteLog("/", initialResult, enteredNumber);
    writeLog("DIVIDE", initialResult , enteredNumber, currentResult);
}

// EXPONENT NUMBERS FROM HTML DOCUMENT
function exponentNumbers() {
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    currentResult **= enteredNumber;  
    createAndWriteLog('^', initialResult, enteredNumber);
    writeLog("EXPONENT", initialResult , enteredNumber, currentResult);
}      

function restartAllNumbers() {
    window.location.reload(true);
}
// BUTTONS WHICH ARE WORKS LIKE OPERATORS
addBtn.addEventListener('click', addNumbers); //BUTTON WHICH add NUMBERS
subtractBtn.addEventListener('click', subtractNumbers); //BUTTON WHICH subtract NUMBERS
multiplyBtn.addEventListener('click', multiplyNumbers); //BUTTON WHICH multiply NUMBERS
divideBtn.addEventListener('click', divideNumbers); //BUTTON WHICH divide NUMBERS
exponentBtn.addEventListener('click', exponentNumbers); //BUTTON WHICH exponent NUMBERS
restartBtn.addEventListener('click', restartAllNumbers); //BUTTON WHICH restart ALL EXPONENT