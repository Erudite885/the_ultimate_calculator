// very basic calculator
let currentResult = 0;
let calculationDescription;

function add() {
  currentResult = currentResult + userInput.value;
  calculationDescription = "Description";
  outputResult(currentResult, calculationDescription);
  //   alert(`The result is ${result}`);
  // return result;
}

// const additionResult =  add(25, 55);
// add(21, 89);
// currentResult = additionResult;

addBtn.addEventListener("click", add);
