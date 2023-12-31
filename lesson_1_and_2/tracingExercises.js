let num1 = 5;
function myFunc() {
  num1 = 10;
}
myFunc();
console.log(num1);
//=> 10

let num2 = 5;
function myFunc() {
  console.log(num2);
  num2 = 10;
}
myFunc();
console.log(num2);
//output => 
//5
//10


let num3 = 5;
function myFunc() {
  let num3 = 10;
}
myFunc();
console.log(num3);
//output => 5


let num4 = 5;
function myFunc() {
  console.log(num4);
  let num4 = 10;
}
myFunc();
console.log(num4);
//output =>
//Reference Error


let num5 = 5;
function myFunc(num5) {
  num5 = 10;
}
myFunc();
console.log(num5);
//output => 5


let num6 = 1;
while (num6 < 3) {
  num6 += 1;
}
console.log(num6);
//output => 3


let num7 = 1;
while (num7 < 3) {
  let num7 = 5;
  num7 += 1;
}
console.log(num7);
//output => infinite loop


//==Objects vs Primitive Values==

let myWord = 'Hello';
myWord.concat(' there.');

console.log(myWord);

//output => Hello


let myWord2 = 'Hello';
myWord.repeat(3);
console.log(myWord2);
myWord2.replace('H', 'J');
console.log(myWord2);
myWord2.toUpperCase();
console.log(myWord2);
//output => 
//Hello
//Hello
//Hello

let myWords3 = ['Hello'];
myWords3.push('Goodbye');
console.log(myWords3);
//output => ['Hello', 'Goodbye']

let myWords4 = ['Hello'];
myWords4.concat(['Goodbye']);
console.log(myWords4);
//output => ['Hello']


let myWords5 = ['Hello'];
myWords5[0].toUpperCase();
console.log(myWords5);
//output => ['Hello']

let myWords6 = ['Hello'];
myWords6[0] = myWords6[0].toUpperCase();

console.log(myWords6);
//output => ['HELLO']

//==VARIABLES AS POINTERS==
//1.
let myWord = 'Hello';
let myOtherWord = myWord;

console.log(myWord);
console.log(myOtherWord);
//output => 
//Hello
//Hello

//2.
let myWord = 'Hello';
let myOtherWord = myWord;
myWord = 'Goodbye';
console.log(myWord);
console.log(myOtherWord);
//output => 
//Goodbye
//Hello

//3.
let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords[0] = 'Hi';

console.log(myWords);
console.log(myOtherWords);
//output =>
//['Hi', 'Goodbye']
//['Hi', 'Goodbye']

//4.
let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords = ['Hi', 'Bye'];
console.log(myWords);
console.log(myOtherWords);
//output => 
//['Hi', 'Bye']
//['Hello', 'Goodbye']

//5.
let myWords = ['Hello', 'Goodbye'];
let myWord = myWords[0];
myWords[0] = 'Hi';

console.log(myWords);
console.log(myWord);
//output =>
//['Hi', 'Goodbye']
//'Hello'


//6.
let myWords = ['Hello', 'Goodbye'];
let myWord = 'Hi';
myWords[0] = myWord;
myWord = 'Hello';

console.log(myWords);
console.log(myWord);
//output => 
//['Hi', 'Goodbye']
//'Hello'

//Pass by Reference vs Pass by Value Exercises

//1.
function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
}

let myWord = 'Hello';
changeMyWord(myWord);
console.log(myWord);
//output => 
//'Hello'
//'Hello'

//2.
function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
  return word;
}

let myWord = 'Hello';
myWord = changeMyWord(myWord);
console.log(myWord);
//output =>
//'Hello'
//'HELLO'


//3. 
function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
  return word;
}

let myWord = 'Hello';
let myOtherWord = changeMyWord(myWord);
console.log(myWord);
console.log(myOtherWord);
//output =>
//'Hello'
//'Hello'
//'HELLO'


//4.
function changeMyWords(words) {
  console.log(words);
  words[0] = 'Hi';
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords);
//output =>
//['Hello', 'Goodbye']
//['Hi', 'Goodbye']

//5.
function changeMyWords(words) {
  console.log(words);
  words = ['Hi', 'Goodbye'];
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords);
//output =>
//['Hello', 'Goodbye']
//['Hi', 'Goodbye']


//Exercises: Variables, Functions and Blocks
//1.
let color = "yellow";
let colors = ["red", "green", "blue"];

function updateColors(colors) {
  colors.push(color);
}

updateColors(colors);
console.log(colors);
//output => ["red", "green", "blue", "yellow"]

//2.
let color = "yellow";
let colors = ["red", "green", "blue"];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors);
console.log(colors);
//output => ["red", "green", "blue", undefined]

//3.
let color1 = "purple";
let color2 = "pink";
let colors = ["red", "green", "blue"];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors, color1);
updateColors(colors, color2);
console.log(colors);
//output => ["red", "green", "blue", "purple", "pink"]

//4.
let color1 = "purple";
let color2 = "pink";
let colors = ["red", "green", "blue"];

function updateColors(colors, color) {
  colors.push(color);
  return colors;
}

let newColors = updateColors(colors, color1);
updateColors(newColors, color2);
console.log(colors);
//output => ["red", "green", "blue","purple","pink"]


//5.
let color = "purple";
let colors = ["red", "green", "blue"];

function addColor(colors, color) {
  colors.push(color);
  return colors;
}

function removeColor(colors) {
  color = colors.pop();
  return colors;
}

let newColors = removeColor(colors);
addColor(colors, color);
console.log(newColors);

//output => ["red", "green", "blue"]

//6.
function capitalize() {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim() {
  return (word += "!!!");
}

let word = "hello";
let capitalizedWord = capitalize(word);
let exclaimedWord = exclaim(capitalizedWord);

console.log(word);
console.log(capitalizedWord);
console.log(exclaimedWord);
//output =>
//hello
//Hello
//Hello!!!

