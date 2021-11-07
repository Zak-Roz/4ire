document.getElementById('clickMe').onclick = function () {
function fibonacci(count, firstNumber, secondNumber) {
  let f1 = firstNumber, f2 = secondNumber, f3;
  if (count === 2) return f2;
  else if (count === 1) return f1;
  if (f1 < 0 || f2 < 0) {
    for (let i = 2; i <= count; i += 1) {
      f3 = f1 - f2;
      [f1, f2] = [f2, f3];
    }
    return -f3;
  }
  if (count < 0) {
    f2 = secondNumber;
    f3 = firstNumber;
    for (let i = count + 1; i < 0; i++) {
      f1 = f3 - f2;
      [f3, f2] = [f2, f1];
    }
    return f1;
  }
  for (let i = 2; i <= count; i += 1) {
    f3 = f1 + f2;
    [f1, f2] = [f2, f3];
  }
  return f3;
}

let firstNumber = +prompt('Enter first number:');
while ((firstNumber.toFixed() !== firstNumber.toString()) || isNaN(firstNumber) || firstNumber === '') {
  firstNumber = +prompt('Error. Try again!\nEnter first number:');
}

let secondNumber = +prompt('Enter second number:');
while ((secondNumber.toFixed() !== secondNumber.toString()) || isNaN(secondNumber || secondNumber === '')) {
  secondNumber = +prompt('Error. Try again!\nEnter second number:');
}

let count = +prompt('Enter number:');
while ((count.toFixed() !== count.toString()) || isNaN(count) || count === '') {
  count = +prompt('Error. Try again!\nEnter number:');
}

alert(`Result: ${ fibonacci(count, firstNumber, secondNumber) }`);
};