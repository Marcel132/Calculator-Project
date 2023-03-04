const userInputOne = document.getElementById('inputNumberOne') // NUMBER ONE FROM INPUT 
const userInputTwo = document.getElementById('inputNumberTwo') // NUMBER TWO FROM INPUT
const userInputThree = document.getElementById('inputNumberThree') // NUMBER ONE FROM INPUT 
const userInputFour= document.getElementById('inputNumberFour') // NUMBER TWO FROM INPUT
const userInputFive = document.getElementById('inputNumberFive') // NUMBER ONE FROM INPUT 
const userInputSix = document.getElementById('inputNumberSix') // NUMBER TWO FROM INPUT

const btnA = document.getElementById('btn-sideA'); // GET BUTTON A FROM DOCUMENT
const btnB = document.getElementById('btn-sideB'); // GET BUTTON B FROM DOCUMENT
const btnC = document.getElementById('btn-sideC'); // GET BUTTON C FROM DOCUMENT

const resultA = document.getElementById('resultSideA'); // GET RESULT A FROM SPAN
const resultB = document.getElementById('resultSideB'); // GET RESULT B FROM SPAN
const resultC = document.getElementById('resultSideC'); // GET RESULT C FROM SPAN

function getResultOutputA(result) {resultA.textContent = result;}
function getResultOutputB(result) {resultB.textContent = result;}
function getResultOutputC(result) {resultC.textContent = result;}

function getUserInputOne() {return parseInt(userInputOne.value);} // RETURN INPUT VALUE ONE 
function getUserInputTwo() {return parseInt(userInputTwo.value);} // RETURN INPUT VALUE TWO
function getUserInputThree() {return parseInt(userInputThree.value);} // RETURN INPUT VALUE THREE
function getUserInputFour() {return parseInt(userInputFour.value);} // RETURN INPUT VALUE FOUR
function getUserInputFive() {return parseInt(userInputFive.value);} // RETURN INPUT VALUE FIVE
function getUserInputSix() {return parseInt(userInputSix.value);} // RETURN INPUT VALUE SIX

const defaultValue = 0;
let calcNumber = defaultValue;
let logEntries = [];

// WRITE LOG IN DEV TOOLS
function writeLog(calcSide, numOne, numTwo, resultNumber) {
    const logEntry = {
        calculationSide: calcSide,
        numberOne: numOne,
        numberTwo: numTwo,
        result: resultNumber
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function resultSideA() {
    const numOne = getUserInputOne(); // SIDE C
    const numTwo = getUserInputTwo(); // SIDE B
    resultNumber = (numOne ** 2)-(numTwo ** 2);
    calcNumber = Math.sqrt(resultNumber).toFixed(2); 
    getResultOutputA(calcNumber);
    writeLog("A", numOne, numTwo, calcNumber);
}

function resultSideB() {
    const numOne = getUserInputThree(); // SIDE C
    const numTwo = getUserInputFour(); // SIDE A
    resultNumber = (numOne ** 2)-(numTwo ** 2);
    calcNumber = Math.sqrt(resultNumber).toFixed(2);
    getResultOutputB(calcNumber);
    writeLog("B", numOne, numTwo, calcNumber);
}

function resultSideC() {
    const numOne = getUserInputFive(); // SIDE A
    const numTwo = getUserInputSix(); // SIDE B
    resultNumber = (numOne ** 2)+(numTwo ** 2);
    calcNumber = Math.sqrt(resultNumber).toFixed(2);
    getResultOutputC(calcNumber);
    writeLog("C", numOne, numTwo, calcNumber);
}


const btnRestart = document.getElementById('btn-restart'); // GET BUTTON WHICH RESTART WINDOW
// RESTART WINDOW
function restartAllNumbers() { 
    window.location.reload(true);
}

btnA.addEventListener('click', resultSideA); // BUTTON WHICH CALCULATE SIDE A
btnB.addEventListener('click', resultSideB); // BUTTON WHICH CALCULATE SIDE B
btnC.addEventListener('click', resultSideC); // BUTTON WHICH CALCULATE SIDE C
btnRestart.addEventListener('click', restartAllNumbers); //BUTTON WHICH restart ALL EXPONENT