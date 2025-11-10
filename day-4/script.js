// the result is "It's a normal day."
let day = "Monday";

switch (day) {
  case "monday":
    console.log("It's the start of the week.");
    break;
  default:
    console.log("It's a normal day.");
}

//3. Build a Calculator with switch-case
let amount = prompt("Enter the amount: ");
if (amount % 100 === 0)
  console.log("Withdrawal successful")
else
  console.log("Invalid amount");

//4. Pay for your movie ticket
let number1 = Number(prompt("Enter the first number: "));
let number2 = Number(prompt("Enter the second number: "));
let operator = prompt("Please enter the operator: ");

console.log(typeof (number1));

switch (operator) {
  case '+': console.log(number1 + number2);
    break;
  case '-': console.log(number1 - number2);
    break;
  case '*': console.log(number1 * number2);
    break;
  case '/': console.log(number1 / number2);
    break;
  case '%': console.log(number1 % number2);
    break;
  default: console.log("Incorrect operator!");
}

4.
let age = Number(prompt("Enter your age: "));

if (age <= 0) {
  console.log("Error: age invalid!");
}

if (age < 18) {
  console.log("Ticket price: 3$");
} else if (age >= 18 && age <= 60) {
  console.log("Ticket price: 10$");
} else {
  console.log("Ticket price: 8$");
}

//5. Horoscope Sign Checker
let birthDay = Number(prompt("Enter your birthday: "));
let birthMounth = prompt("Enter your birthMounth");

if (isNaN(birthDay)) {
  console.log("Please enter a numerical value");
}

if (!isNaN(birthMounth)) {
  console.log("Not a numerical value");
}

if (
  (birthDay >= 21 && birthMounth === "march") ||
  (birthDay <= 19 && birthMounth === "april3")
) {
  console.log("Aries");
} else if (
  (birthDay >= 20 && birthMounth === "april") ||
  (birthDay <= 20 && birthMounth === "may")
) {
  console.log("Taurus");
} else if (
  (birthDay >= 21 && birthMounth === "may") ||
  (birthDay <= 20 && birthMounth === "june")
) {
  console.log("Gemini");
} else if (
  (birthDay >= 21 && birthMounth === "june") ||
  (birthDay <= 22 && birthMounth === "july")
) {
  console.log("Cancer");
} else if (
  (birthDay >= 23 && birthMounth === "july") ||
  (birthDay <= 22 && birthMounth === "august")
) {
  console.log("Leo");
} else if (
  (birthDay >= 23 && birthMounth === "august") ||
  (birthDay <= 22 && birthMounth === "september")
) {
  console.log("Virgo");
} else if (
  (birthDay >= 23 && birthMounth === "september") ||
  (birthDay <= 22 && birthMounth === "october")
) {
  console.log("Libra");
} else if (
  (birthDay >= 24 && birthMounth === "october") ||
  (birthDay <= 21 && birthMounth === "november")
) {
  console.log("Scorpio");
} else if (
  (birthDay >= 22 && birthMounth === "november") ||
  (birthDay <= 21 && birthMounth === "december")
) {
  console.log("Sagittarius");
} else if (
  (birthDay >= 22 && birthMounth === "december") ||
  (birthDay <= 22 && birthMounth === "january")
) {
  console.log("Capricorn");
} else if (
  (birthDay >= 20 && birthMounth === "january") ||
  (birthDay <= 18 && birthMounth === "february")
) {
  console.log("Aquarius");
} else if (
  (birthDay >= 19 && birthMounth === "february") ||
  (birthDay <= 20 && birthMounth === "march")
) {
  console.log("Pisces");
}

//6. Which Triangle?
let firstSide = Number(prompt("Enter the size of the" + " first side"));

let secondSide = Number(prompt("Enter the size of the" + " second side"));

let thirdSide = Number(prompt("Enter the size of the" + " first side"));

if (isNaN(firstSide) || isNaN(secondSide) || isNaN(thirdSide)) {
  console.log("There is a no numerical value in your input!")
}

if (
  firstSide === secondSide &&
  firstSide === thirdSide &&
  secondSide === thirdSide
) {
  console.log("Equilateral Triangle");
} else if (
  (firstSide === secondSide &&
    (thirdSide != firstSide || thirdSide != secondSide)) ||
  (secondSide === thirdSide &&
    (firstSide != secondSide || firstSide != thirdSide)) ||
  (firstSide === thirdSide &&
    (secondSide != firstSide || secondSide != thirdSide))
) {
  console.log("Isosceles Triangle");
} else if (
  firstSide != secondSide &&
  firstSide != thirdSide &&
  secondSide != thirdSide
) {
  console.log("Scalene Triangle");
}
