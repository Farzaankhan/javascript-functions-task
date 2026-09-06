function userName(name) {
  console.log("Hello " + name);
}

userName("Hassan");

function addWords(word1, word2) {
  console.log(word1 + " " + word2);
}

addWords("Hello", "World");

function multiply(a, b) {
  return a * b;
}

let result = multiply(5, 4);
console.log(result);

function calculateSquare(number) {
  return number * number;
}

let square = calculateSquare(6);
console.log(square);

function checkAge(age) {
  if (age >= 18) {
    return "You are eligible";
  } else {
    return "You are not eligible";
  }
}

console.log(checkAge(20));

function printNumbers(limit) {
  for (let i = 1; i <= limit; i++) {
    console.log(i);
  }
}

printNumbers(5);

let students = ["Hassan", "Ali", "Ahmed", "Sara"];

function showStudents() {
  for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
  }
}

showStudents();

function test() {
  let message = "Hello";

  console.log(message);
}

test(); 