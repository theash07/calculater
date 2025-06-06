const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let expression = '';

function updateDisplay() {
  display.value = expression;
}

function calculate() {
  try {
    expression = eval(expression).toString();
  } catch {
    expression = 'Error';
  }
  updateDisplay();
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const key = button.getAttribute('data-key');

    if (key === 'C') {
      expression = '';
    } else if (key === 'Backspace') {
      expression = expression.slice(0, -1);
    } else if (key === 'Enter') {
      calculate();
      return;
    } else {
      expression += key;
    }

    updateDisplay();
  });
});

// Keyboard support
document.addEventListener('keydown', (e) => {
  const key = e.key;
  if ((/\d|\+|\-|\*|\/|\./).test(key)) {
    expression += key;
  } else if (key === 'Enter') {
    calculate();
    return;
  } else if (key === 'Backspace') {
    expression = expression.slice(0, -1);
  } else if (key.toLowerCase() === 'c') {
    expression = '';
  }

  updateDisplay();
});
