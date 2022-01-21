function sum(a, b) {
  const number1 = a || 0;
  const number2 = b || 0;
  return number1 + number2;
}

function subtract(a, b) {
  const number1 = a || 0;
  const number2 = b || 0;
  return number1 - number2;
}

function divide(a, b) {
  const number1 = a || 0;
  const number2 = b || 0;

  if (!!number1 && !!number2) {
    return number1 / number2;
  } else {
    throw new Error('An explanatory error message');
  }
}

function multiply(a, b) {
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
