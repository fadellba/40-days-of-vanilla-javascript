//1. Write a Function to Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

console.log(celsiusToFahrenheit(1));

//2. Create a Function to Find the Maximum of Two Numbers
function findMax(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

console.log(findMax(10, 5));

//3. Function to Check if a String is a Palindrome
function isPalindrome(str) {
  for (let i = 0; i <= str.length / 2; i++) {
    if (str.charAt(i) != str.charAt(str.length - 1 - i)) {
      return "No palindrome";
    }
  }
  return "palindrome";
}
console.log(isPalindrome("ressasser"));

//4. Write a Function to Find Factorial of a Number
function factorial(n) {
  let f = 1;
  for (let i = 1; i <= n; i++) {
    f *= i;
  }
  console.log(f);
}

factorial(0);

//5. Write a function to Count Vowels in a String
const vowels = "aeiou";

function countVowels(str) {
  for (let i = 0; i < vowels.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (vowels.charAt(i) === str.charAt(j)) {
        count++;
      }
    }
    console.log(vowels.charAt(i) + " has been seen " + count);
  }
}

countVowels("Hello World!");

//6. Write a Function to Capitalize the First Letter of Each Word in a Sentence
function capitalizeWords(sentence) {
  let str = "";
  sentence = sentence.split(' ');
  sentence.forEach((element) => {
    let rest = element.substring(1);
    let capitalLetter = element.charAt(0).toUpperCase();
    element = capitalLetter + rest;
    str += element + ' ';
  });
  sentence = str;
  console.log(sentence);
}

capitalizeWords("hello world!");

//7. Use an IIFE to Print “Hello, JavaScript!”
(function (str = "JavaScript") {
  console.log("Hello, " + str);
})();

//8. Create a Simple Callback Function
function greet(name,callBack) {
  callBack(name);
}

greet("Fadel",(name) => console.log("Hello, " + name));

//9. Create Call Stack Execution Diagram for this flow
function f1() {}
function f2() {
  f1();
}
f2();
//call stack execution
// execution order
// 1 => f2()
// 2 => f1()

//10. Create Call Stack Execution Diagram for this flow
function f1() {}
function f2() {}
function f3() {
  f1();
}
f2();
f3();
f1();
//call stack execution
// execution order
// 1 => f2()
// 2 => f1()
// 3 => f3()