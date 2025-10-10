// Odd or Even number
let number = 1;
let result1 = (number % 2) === 0 ?
    number + " is odd" :
    number + " is even";
console.log(result1);

// eligibility to get a driving licence
let age = 13;
let  result2 = age >= 18 ?
    "You are eligible to get a driving license" :
    "You are not eligible to get a driving license";
console.log(result2);

// calculate annual salary
const salary = 12300;
let bonus = 20 / 100;
let annualSalary = 12300 * 12;
let annualSalaryAndBonus = annualSalary + annualSalary * bonus;
console.log("As a CTC i make " + annualSalaryAndBonus + " per year !");

// Traffic light simulation
let color = "GREEN";
color === "Red" ?
    console.log("STOP")
    : color === "GREEN" ?
        console.log("GO")
        : console.log("Slow down");

//Electricity Bill Calculator
// Notis: in this algorithm I don't manage the case where month is february
// and the moth that count 31 days
const pricePerUnit = 150;
let units = 100;
let totalInMonth = 100 * 150;
let totalInYear = totalInMonth * 12;
let totalAfterDiscount = totalInYear - totalInYear * bonus;
console.log(totalInMonth);
console.log(totalInYear);
console.log(totalAfterDiscount);

//Leap year
const year = 2025;
(year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ?
    console.log("Leap year")
    : console.log("No leap year");

// Max of three number
let p = 4, q = 2, r = 3;
let max = p > q ? p : q;
max = max > r ? max : r;
console.log(max);

// bitwise doubling
const count = 5;
const double = count << 1;
console.log(double);





























