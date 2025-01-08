function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function operate(a, b, operator) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Handle non-number inputs
  }
  switch (operator) {
    case '+': return add(a, b);
    case '-': return subtract(a, b);
    case '*': return multiply(a, b);
    case '/': return divide(a, b);
    default: return NaN; // Handle invalid operators
  }
}

console.log(operate(10, 5, '+')); // 15
console.log(operate(10, 5, '-')); // 5
console.log(operate(10, 5, '*')); // 50
console.log(operate(10, 5, '/')); // 2
console.log(operate(10, 0, '/')); // throws an error
console.log(operate(10, 5, '%')); // NaN
console.log(operate('a', 5, '+')); // NaN