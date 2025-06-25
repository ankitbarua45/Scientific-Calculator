let expression = '';
let resultDisplay = document.getElementById('result');
let expressionDisplay = document.getElementById('expression');

function appendValue(value) {
  expression += value;
  updateDisplay();
}

function clearDisplay() {
  expression = '';
  resultDisplay.innerText = '0';
  expressionDisplay.innerText = '';
}

function deleteLast() {
  expression = expression.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  expressionDisplay.innerText = expression;
  try {
    const result = eval(expression);
    resultDisplay.innerText = result;
  } catch {
    resultDisplay.innerText = 'Error';
  }
}

function calculate() {
  try {
    const result = eval(expression);
    resultDisplay.innerText = result;
    expression = result.toString();
    expressionDisplay.innerText = '';
  } catch {
    resultDisplay.innerText = 'Error';
  }
}
