const display = document.getElementById('display');
let currentInput = '';
let operatorUsed = false;

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;

    if (value === 'C') {
      currentInput = '';
      operatorUsed = false;
    } else if (value === '←') {
      currentInput = currentInput.slice(0, -1);
    } else if (value === '=') {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = 'Error';
      }
    } else {
      // Only one operator at a time
      if (['+', '-', '*', '/'].includes(value)) {
        if (operatorUsed || currentInput === '') return;
        operatorUsed = true;
      } else {
        operatorUsed = false;
      }
      currentInput += value;
    }

    display.textContent = currentInput || '0';
  });
});
