document.getElementById('clickMe1').onclick = function () {

  function fibonacci(count) {
    if (count === 0) return 0;
    if (count === -1 || count === 1) return 1;
    let f1, f2, f3;
    if (count < 0) {
      f2 = 1;
      f3 = 0;
      for (let i = count + 1; i < 0; i++) {
        f1 = f3 - f2;
        [f3, f2] = [f2, f1];
      }
      return f1;
    }
    f1 = 0, f2 = 1;
    for (let i = 1; i < count; i++) {
      f3 = f1 + f2;
      [f1, f2] = [f2, f3];
    }
    return f2;

  }

  let count = +prompt('Enter number:');
  while ((count.toFixed() !== count.toString()) || isNaN(count) || count === '') {
    count = +prompt('Error. Try again!\nEnter number:');
  }
  alert(`Result: ${fibonacci(count)}`);
};
