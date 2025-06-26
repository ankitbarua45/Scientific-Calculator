const display = document.getElementById('display');

function appendValue(val) {
  display.value += val;
}

function appendFunction(func) {
  display.value += func;
}

function clearDisplay() {
  display.value = '';
}

function toggleSign() {
  if (display.value) {
    display.value = String(-parseFloat(display.value));
  }
}

function calculateFactorial() {
  let n = parseInt(display.value);
  if (isNaN(n) || n < 0) {
    display.value = "Error";
    return;
  }
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact *= i;
  }
  display.value = fact;
}

function power() {
  display.value += "**";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
