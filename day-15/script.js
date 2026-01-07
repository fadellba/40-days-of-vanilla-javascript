//T-001: Create an array of 5 elements using the Array Constructor.
const array1 = new Array(1, 2, 3, 4, 5);

//T-002: Create an array of 3 empty slots.
const array2 = new Array(3);

//T-003: Create an array of 6 elements
// using the Array literals and access
// the fourth element in the array using
// its length property.
const array3 = [1, 2, 3, 4, 5, 6];
console.log(array3[array3.length - 3]);

//T-004: Use the for loop on the above array
// to print elements in the odd index.
for (let i = 0; i < array3.length; i++) {
  if (i % 2 === 0) console.log(array3[i]);
}

//T-005: Add one element at the front
// and the end of an array.
array3.unshift(0);
array3.push(7);
console.log(array3);

//T-006: Remove an element from the
// front and the end of an array.
array3.pop();
array3.shift();
console.log(array3);

//T-007: Create an array containing the name
// of your favourite foods(10 foods).
//Destructure the 6th food element
// from the array using destructuring.
const myFavoriteFoods = [
  "🍕",
  "🍔",
  "🍟",
  "🌭",
  "🥚",
  "🧀",
  "🥗",
  "🍗",
  "🥩",
  "🌮",
];

const [, , , , , , sixth] = myFavoriteFoods;
console.log(sixth);

// T-008: Take out the last 8 food items
// from the above array using the Array
// destructuring. Hint: rest parameter.
const [, , ...last8] = myFavoriteFoods;
console.log(last8);

//T-009: Clone an Array(Shallow cloning)
const myFavoriteFoodsCopie = myFavoriteFoods.slice();
console.log(myFavoriteFoodsCopie);

//T-010: Empty an array using its length property
myFavoriteFoods.length = 0;
console.log(myFavoriteFoods);

//T-011: Create an array of 10
// elements(number 1 to 10).
// Resize the array to length 6 once
// you find the number 5 in that array.
// Hint: Use for-loop.
const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array4.length; i++) {
  if (array4[i] === 5) {
    array4.length = 6;
    break;
  }
}
console.log(array4);

//T-012: Create an Array of 10 elements.
// Use the splice() method to empty the array.
const array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
array5.splice(0, Infinity);
console.log(array5);

//T-013: Create an Array of 10 elements.
// You can empty the array in multiple ways:
// using the length property, using the pop()
// method, using the shift() method,
// setting the array with [], or the splice()
// method. Which among these methods are most
// efficient and why?
let array6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array6 = [];

array6.length = 0;

for (let i = 0; i < array6.length; i++) {
  array6.shift();
}

for (let i = 0; i < array6.length; i++) {
  array6.pop();
}

// using length property and [] are most
// efficient because we loop for deleting items one
// by one (problem of performance and optimization)

//T-014: What happens when you concatenate two empty arrays?
const empty1 = [];
const empty2 = [];
const empty = [...empty1, ...empty2]; //one empty array
console.log(empty);

//T-015: How can you check if a value is partially
//matching with any of the elements of an Array?

// we can check if a value is partially
//matching with any of the elements of an Array
// by using for...of loop
let array7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const i of array7) {
  if (i === 2) {
    console.log("2 founded");
    break;
  }
}

//T-016: What is the difference between the slice() and splice() methods?

/*

The slice() method of Array instances returns a shallow copy 
of a portion of an array into a new array object selected from 
start to end (end not included) where start and end represent 
the index of items in that array. The original array will not be 
modified.

The splice() method of Array instances changes the contents 
of an array by removing or replacing existing elements and/or 
adding new elements in place.

*/

//T-017: Create an Array of alphanumeric strings.
// Sort the elements in both ascending and descending orders.
// You must be doing this in an immutable way such that
// the source array never gets modified.

const phones = ["iPhone15", "GalaxyS24", "Pixel8Pro", "ZFold5", "A54"];
console.log(phones);

const ascSort = phones.toSorted((a, b) => a.localeCompare(b));
console.log(ascSort);
console.log(phones);

const descSort = phones.toSorted((a, b) => b.localeCompare(a));
console.log(descSort);
console.log(phones);

//T-018: Can you give examples of sparse and dense arrays?

const fruits = ["Pomme", "Banane", "Orange"]; //dense

const sparse1 = [1, , 3]; // sparse

//T-019: Give a practical usages of the .fill() method
const array = [1, 2, 3, 4];

console.log(array.fill(0, 2, 4));

console.log(array.fill(5, 1));

console.log(array.fill(6));

// T-020: How to convert an array to a string?

const str = array.join();
console.log(str);

const employees = [
  { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
  { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
  { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
  { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
  { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
  { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
  { id: 7, name: "George", departmentId: 3, salary: 5200 },
  { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
  { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
  { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];

const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "Engineering" },
  { id: 3, name: "Marketing" },
  { id: 4, name: "Sales" },
];

//T-021: Can you filter employees who work in the "Engineering" department?

const engineeringDept = departments.find((d) => d.name === "Engineering");

const engineers = employees.filter(
  (emp) => emp.departmentId === engineeringDept?.id
);

console.log(engineers);

//T-022: Create a new array that combines employee names and
// department names in the format: "Alice (HR)".

const empsAndDepts = employees.map((emp) => {
  const dept = departments.find((d) => d.id === emp.departmentId);
  return `${emp.name} (${dept?.name || "Unknown"})`;
});

console.log(empsAndDepts);

//T-023: Find the highest salary among employees.

const salaries = employees.map((emp) => emp.salary);
console.log(salaries);
const maxSalary = Math.max(...salaries);
console.log(maxSalary);

//T-024: Check if there is at least one employee in the "Sales" department.

const saleDept = departments.find((d) => d.name === "Sales");
const hasSaleDeptEmp = employees.some((emp) => emp.departmentId === saleDept?.id);
console.log(hasSaleDeptEmp);

//T-025: Write a function to filter employees earning more than 6000.

const employeesEarningMoreThan6000 = employees.filter((emp) => emp.salary > 6000);
console.log(employeesEarningMoreThan6000);

//T-026: Create an array of employee names only.

const empsName = employees.map((emp) => emp.name);
console.log(empsName);

//T-027: Calculate the total salary of all employees using

const totalSalaries = employees.reduce((total, emp) => total + emp.salary, 0);
console.log(totalSalaries);

//T-028: Is there any employee earning less than 5000?

const IsThereSalLss5000 = employees.some((emp) => emp.salary < 5000);
console.log(IsThereSalLss5000);

//T-029: Find the first employee who earns exactly 5100.

const firstEMpEarnsExactly5100 = employees.find((emp) => emp.salary === 5100);
console.log(firstEMpEarnsExactly5100);

// T-030: Find the last employee in the "HR" department.

const hrDept = departments.find((d) => d.name === "HR");
const lastEmpAtHRDept = employees.findLast((emp) => emp.departmentId === hrDept?.id);
console.log(lastEmpAtHRDept);

// T-031: Find the first employee in the "Marketing" department.

const marketingDept = departments.find((d) => d.name === "Marketing");
const firstEmpAtMrktngDept = employees.find(
  (emp) => emp.departmentId === marketingDept?.id
);
console.log(firstEmpAtMrktngDept);

// T-032: Check if all employees earn more than 4000.

const hasEveryEmpEarnGt4000 = employees.every((emp) => emp.salary > 4000);
console.log(hasEveryEmpEarnGt4000);

//T-033: Find the first employee in the "Sales" and "HR" department.
const targetIds = [saleDept?.id, hrDept?.id];
const fehrsl = employees.find((emp) => targetIds.includes(emp.departmentId));
console.log(fehrsl);

//T-034: Verify if all employees belong to a department listed in the departments array.
const isAllEmpInDeptList = employees.every((emp) =>
  departments.find((d) => d.id === emp.departmentId)
);
console.log(isAllEmpInDeptList);


//T-035: Log each employee's name and department name to the console.
employees.map((emp) => {
  const dept = departments.find((d) => d.id === emp.departmentId);
  console.log(`Emp : ${emp.name} Service : ${dept.name}`);
});

//T-036: Extract all employee names into a single array.
{
  const empsName = employees.map((emp) => emp.name);
  console.log(empsName);
}

//T-037: Increment each employee's salary by 10%
const primes = employees.map((emp) => {
  emp.salary = emp.salary + (emp.salary * (10 / 100));
  return emp;
});
console.log(primes)

  // T-038: Assume each employee can have multiple skills.
  //  Create an array of employee skills and flatten them.
//  Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...].

const employeesWithSkills = [
  { name: "Alice", skills: ["Excel", "Management"] },
  { name: "Bob", skills: ["Python", "Data Analysis"] },
  { name: "Charlie", skills: ["HTML", "CSS", "JavaScript"] },
];

const allSkills = employeesWithSkills.flatMap((emp) => emp.skills);
console.log(allSkills);

//T-039: Find the total salary of all employees working in the "Engineering" department.
const t039 = employees.reduce((total, emp) => {
  if (emp.departmentId === engineeringDept?.id) {
   total = total + emp.salary;
  }
  return total;
}, 0);
console.log(t039); 

//T-040: Check if there is any department where all employees earn more than 5000.
const t040 = departments.some((dept) => {
  const deptEmps = employees.filter((e) => e.departmentId === dept.id);
  return deptEmps.length > 0 && deptEmps.every((e) => e.salary > 5000);
});
console.log(t040)

//T-041: Assume each employee has a projects array (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }). Find the total number of unique projects being handled across all employees.
const employeesWithProject = [
  { id: 1, name: "Alice", projects: ["Project A", "Project B"] },
  { id: 2, name: "Bob", projects: ["Project A", "Project C"] },
  { id: 3, name: "Charlie", projects: ["Project A", "Project D"] },
];

const uniqueProjects = new Set(employeesWithProject.flatMap((emp) => emp.projects));
console.log(uniqueProjects.size);

//T-042: For each employee,
// find their department name and return an array of employee names with their department names.
const empsWDeptNames = employees.map((emp) => {
  const dept = departments.find((d) => d.id === emp.departmentId);
  return { name: emp.name, department: dept?.name };
});
console.log(empsWDeptNames);

//T-043: Get a list of names of employees earning more than 6000.
const empSalGt6000 = employees.filter((emp) => emp.salary > 6000);
const t043 = empSalGt6000.map((emp) => emp.name);
console.log(t043);

//T-044: Write a for-of loop to print the names of all
// employees from the employees array.
for (let e of employees) {
  console.log(e.name);
}

//T-045: Using a for-of loop, print the names of employees
// earning more than 5000.
console.log("------------");
for (let e of employees) {
  if(e.salary > 5000)
    console.log(e.name);
}

//T-046: Modify the for-of loop to destructure each employee object
// and log their name and salary.
console.log("------------");
for (let e of employees) {
  let { name, salary } = e;
  console.log(`Name: ${name}, Salary: ${salary}`);
}

//T-047: Write a for-of loop to match employees with their
// departments and print the results.
console.log("------------");
for (let e of employees) {
  for (let d of departments) {
    if (e.departmentId === d.id) {
      console.log(e.name + " " + d.name);
      break;
    }
  }
}

//T-048: Use Array.prototype.entries() with a for-of loop
// to print the index and name of each employee.
const t048 = employees.entries();
for (const [i, e] of t048) {
  console.log(i + " " + e.name);
}

//T-049: Given the array-like object below, 
// access the second element and log it:
const arrayLike = { 0: "First", 1: "Second", length: 2 };
console.log(arrayLike[1]);

//T-050: Write a function that takes a variable number of arguments
// and converts the arguments object into a real array using Array.from.
function toArray() {
  const arr = Array.from(arguments);
  console.log(arr);
}

toArray(arrayLike);

//T-051: Write a snippet to select all div elements on a webpage
// (using document.querySelectorAll) and convert the resulting NodeList
// into an array.
const elmts = document.querySelectorAll('div');
console.log(elmts);
console.log([...elmts]);

//T-052: Merge these two arrays into a single array:
const arr1 = [1, 2];
const arr2 = [3, 4];
const merge = [...arr1, ...arr2];
console.log(merge);

//T-053: Create an array of n duplicate values using Array.from.
//Input: Create an array with 5 "A" values. Output: ["A", "A", "A", "A", "A"]
const duplicateAs = Array.from({ length: 5 }, () => "A");
console.log(duplicateAs);

//T-054: Use Array.from to convert a string like "Hello" into an array of characters.
console.log(Array.from("hello"));

//T-055: For the array, ['apple', 'banana', 'apricot', 'mango', 'blueberry'],
// group words by their first letter using group().

const rslt = Object.groupBy(["apple", "banana", "apricot", "mango", "blueberry"],(elm) => elm.charAt(0));
console.log(rslt);

//T-057: From this array ,
// find the most repeated number. Hint: Use array method.
const arr = [3, 7, 3, 2, 3, 8, 7, 7];
const counts = arr.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});
const mostRepeated = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
console.log(Number(mostRepeated));

//T-058: Find the median of [5, 2, 9, 1, 3, 6, 8].
const nums = [5, 2, 9, 1, 3, 6, 8].sort((a, b) => a - b);
const mid = Math.floor(nums.length / 2);
const median = nums.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
console.log(median);

//T-059: Convert this array
// [['a', 1], ['b', 2], ['c', 3]], into { a: 1, b: 2, c: 3 }
// using array method(s).
const entries = [['a', 1], ['b', 2], ['c', 3]];
console.log(Object.fromEntries(entries));

//T-060: Flatten and convert all letters to uppercase in one step using flatMap(). Here is input array: [['a', 'b'], ['c', 'd']].

const input60 = [['a', 'b'], ['c', 'd']];
console.log(input60.flatMap(sub => sub.map(l => l.toUpperCase())));

// T-061: Count the occurrences of each fruit in this array: ['apple', 'banana', 'apple', 'mango', 'banana', 'banana']
const fruits61 = ['apple', 'banana', 'apple', 'mango', 'banana', 'banana'];
const fruitCounts = fruits61.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(fruitCounts);

// T-062: Extract extract [‘b’, ‘c’, ‘d’] using slice() from this array: ['a', 'b', 'c', 'd', 'e']
console.log(['a', 'b', 'c', 'd', 'e'].slice(1, 4));

// T-063: Sort the array [9, 3, 1, 6, 8] in ascending order using toSorted()
console.log([9, 3, 1, 6, 8].toSorted((a, b) => a - b));

// T-064: Reverse [1, 2, 3, 4, 5] using toReversed() and compare it with reverse()
const arr64 = [1, 2, 3, 4, 5];
console.log(arr64.toReversed());
console.log(arr64); // Original is unchanged

// T-065: Group the follwing array elements based on age(Adult vs Non-Adult):
const users = [
  { name: 'Alice', age: 55 },
  { name: 'Bob', age: 3 },
  { name: 'Charlie', age: 25 },
];
console.log(Object.groupBy(users, user => user.age >= 18 ? 'Adult' : 'Non-Adult'));

// T-066: Find the longest word in this sentence using Array and Array methods: "40 Days of JavaScript by tapaScript is a powerful initiative".
const sentence = "40 Days of JavaScript by tapaScript is a powerful initiative";
const longestWord = sentence.split(' ').reduce((longest, current) => current.length > longest.length ? current : longest, "");
console.log(longestWord);

// T-067: Find common elements between two arrays, [1, 2, 3, 4], [3, 4, 5, 6]
const arrA = [1, 2, 3, 4];
const arrB = [3, 4, 5, 6];
console.log(arrA.filter(item => arrB.includes(item)));