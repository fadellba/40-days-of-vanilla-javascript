//1. Generate a Pyramid Pattern using Nested Loop as it is shown below:
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    ProcessingInstruction.stdout.write("* ");
  }
  console.log();
}

//2. Craete Multiplication Table (Using for loop)
const n = 5;
for (let i = 1; i <= 10; i++) {
  console.log(n + " x " + i + " = " + i * n);
}

//3. Find the summation of all odd numbers between 1 to 500 and print them on the console log.
let sum = 0;
for (let i = 1; i <= 500; i += 2) {
  sum += i;
}
console.log("The summation of all odd numbers between 1 to 500: " + sum);

//4. Skipping Multiples of 3
for (let i = 1; i <= 20; i++) {
  if (i % 3 == 0) continue;
  console.log(i);
}

//5. Reverse Digits of a Number (Using while loop)
const number = "6789";
let numberInversed = "";
let i = number.length;
while (i > 0) {
  numberInversed += number.charAt(i - 1);
  i--;
}
console.log(numberInversed);

//6. Write your understanding on the difefrences between for, while, and do-while loop. Create their flow charts.
/**
 * for, while and do...while are same
 * because while the test is true 
 * the loop run but there is 
 * a scpecificity for the use of each loop
 * for is used when we know the number of iteration,
 * while and do...while when we don't know
 */