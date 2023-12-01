function calculateSumEvenNumbers() {
    let M = parseInt(prompt("Введите значение M:", ""));
    let N = parseInt(prompt("Введите значение N:", ""));
    let sum = 0;
    for (let i = M; i <= N; i++) {
      if (i % 2 === 0) {
        sum += i;
      }
    }
    document.getElementById("result1").innerText = "Сумма четных чисел в диапазоне от " + M + " до " + N + " равна " + sum;
  }
  
  function printNumbers() {
    let a = parseInt(prompt("Введите значение a:", ""));
    let b = parseInt(prompt("Введите значение b:", ""));
    let output = "";
    const start = Math.min(a, b);
    const end = Math.max(a, b);
    for (let i = start; i <= end; i++) {
      output += i + " ";
    }
    document.getElementById("result2").innerText = "Числа от " + a + " до " + b + ": " + output.trim();
  }
  
  function calculateSumOfDigits() {
    const randomNumber = Math.floor(Math.random() * (100000 - 1000 + 1)) + 1000;
    let sum = 0;
    let num = randomNumber;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    document.getElementById("result3").innerText = "Сумма цифр случайного числа " + randomNumber + " равна " + sum;
  }
  
  function drawChessBoard() {
    let size = 8; // Размер доски (8x8)
    let board = "";
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if ((i + j) % 2 === 0) {
          board += "■"; // Черная клетка
        } else {
          board += "□"; // Белая клетка
        }
      }
      board += "\n"; // Переход на новую строку
    }
    document.getElementById("result4").innerText = board;
  }
  