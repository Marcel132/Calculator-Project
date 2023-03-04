// GETTING USERS INPUT FROM DOCUMENT
const userAngInput = document.getElementById("userInputAng");
const userHailInput = document.getElementById("userInputHail");
const userRadInput = document.getElementById("userInputRad");

// GETTING RESULTS FROM DOCUMENT
// ------------------------------------- //
const aHailResult = document.getElementById("angToHailResult");
const aRadResult = document.getElementById("angToRadResult");
function getResultOutputAHail(result) {aHailResult.textContent = result};
function getResultOutputARad(result) {aRadResult.textContent = result};
// ------------------------------------- //
// ------------------------------------- //
const hAngResult = document.getElementById("hailToAngResult");
const hRadResult = document.getElementById("hailToRadResult");
function getResultOutputHAng(result) {hAngResult.textContent = result};
function getResultOutputHRad(result) {hRadResult.textContent = result};
// ------------------------------------- //
// ------------------------------------- //
const rAngResult = document.getElementById("radToAngResult");
const rHailResult = document.getElementById("radToHailResult");
function getResultOutputRAng(result) {rAngResult.textContent = result};
function getResultOutputRHail(result) {rHailResult.textContent = result};

// GETTING BUTTONS FROM DOCUMENT

const angularBttn = document.getElementById('btn-angMeasure');
const hailBttn = document.getElementById('btn-hailMeasure');
const radianBttn = document.getElementById('btn-radMeasure');

// SET USER INPUT VALUE

function getUserInputAng() {return parseInt(userAngInput.value)};
function getUserInputHail() {return parseInt(userHailInput.value)};
function getUserInputRad() {return parseInt(userRadInput.value)};


// SET DEFAULT VALUE 
const defaultValue = 0;
let changeValue = defaultValue;
let logEntries = [];

// WRITE LOG IN DEV TOOLS
function writeLog(measureInput, resultNumOne, resultNumTwo) {
    const logEntry = {
        measureInput: measureInput ,
        resultNumOne: resultNumOne ,
        resultNumTwo: resultNumTwo
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calcAngularResults () {
    const angularNumber = getUserInputAng();
    hailNumber = (changeValue + angularNumber * (10/9)).toFixed(5);
    radianNumber = (changeValue + angularNumber * (Math.PI / 180)).toFixed(5);
    getResultOutputAHail(hailNumber);
    getResultOutputARad(radianNumber);
    writeLog("ANGULAR MEASURE", hailNumber, radianNumber);
}

function calcHailResults () {
    const hailNumber = getUserInputHail();
    angularNumber = (changeValue + hailNumber * (9/10)).toFixed(5);
    radianNumber = (changeValue + hailNumber * (Math.PI / 200)).toFixed(5);
    getResultOutputHAng(angularNumber);
    getResultOutputHRad(radianNumber);
    writeLog("HAIL MEASURE", angularNumber, radianNumber);
}

function calcRadianResults () {
    const radianNumber = getUserInputRad();
    angularNumber = (changeValue + radianNumber * (180 / Math.PI)).toFixed(5);
    hailNumber = (changeValue + radianNumber * (200 / Math.PI)).toFixed(5);
    getResultOutputRAng(angularNumber);
    getResultOutputRHail(hailNumber);
    writeLog("RADIAN MEASURE", angularNumber, hailNumber);
}

angularBttn.addEventListener('click', calcAngularResults); 
hailBttn.addEventListener('click', calcHailResults);
radianBttn.addEventListener('click', calcRadianResults);

// RESTART WINDOW

const btnRestart = document.getElementById('btn-restart');  // GET BUTTON WHICH RESTART WINDOW

function restartAllNumbers() { 
    window.location.reload(true);
}

btnRestart.addEventListener('click', restartAllNumbers); //BUTTON WHICH restart ALL EXPONENT











