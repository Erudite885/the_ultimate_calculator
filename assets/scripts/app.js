// very basic calculator
let currentResult = 0;
let calculationDescription;
let logEntries = [];

function getUserNumberInput() {
  return +userInput.value;
}

function createAndOutput(operator, resultBeforeCalc, calcNumber) {
  calculationDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calculationDescription);
}

function writeToLog(
    operatorIdentifier, 
    prevResult, 
    opNum, 
    newResult) {
  const logEntry = {
    operation: operatorIdentifier,
    prevResult: prevResult,
    number: opNum,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "DIVIDE") {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }
  createAndOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculateResult('ADD');
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
 calculateResult("MULTIPLY");
}

function divide() {
calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
