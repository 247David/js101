const readline = require('readline-sync');

function prompt (msg) {
  console.log(`==> ${msg}`);
}

function invalidNumber (number) {
  return number.trimStart() === '' || Number.isNaN(number);
}
prompt('Welcome to calculator');

prompt('What is the first number?');
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt('Enter valid first number? ');
  number1 = readline.question();
}



prompt('What is the second number');
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt('Enter valid second number? ');
  number2 = readline.question();
}

prompt('What operation would you like to perform ? \n 1) Add 2) Subtract 3) Mulitply 4) Divide');
let operation = readline.question();

while (!['1','2','3','4'].includes(operation)) {
  prompt('Must choose 1, 2, 3 or 4');
  operation = readline.question();
}

let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) * Number(number2);
    break;
}

prompt(`The result is ${output}.`);