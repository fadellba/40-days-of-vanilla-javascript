//1. What will be the output and why?
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided"); //Not provided
// The nullish coalescing operator (`??`) checks if the left-hand side operand
// is `null` or `undefined`.
// Since `user.age` is `undefined`, the operator returns the right-hand side operand,
// which is "Not provided".

//3. Given an object with deeply nested properties,
// extract name, company, and address.city using
// destructuring
const person1 = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107",
    },
  },
};

const {
  name: personName,
  company: {
    name: companyName,
    location: { city: city },
  },
} = person1;

console.log(personName, companyName, city);

//4. Build a Student Management System
//Store student details in an object (name, age, grades).
//Implement a method to calculate the average grade.

const students = [
  {
    name: "fadel",
    age: 23,
    grade: 17,
  },
  {
    name: "mustafa",
    age: 23,
    grade: 20,
  },
  {
    name: "salma",
    age: 22,
    grade: 18,
  },
  {
    name: "sadikh",
    age: 22,
    grade: 20,
  },
  {
    name: "hafsa",
    age: 23,
    grade: 17,
  },
];

function calculateAverageGrade(studentList) {
  if (studentList.length === 0) return 0;
  const sumOfGrades = studentList.reduce(
    (sum, student) => sum + student.grade,
    0
  );
  return sumOfGrades / studentList.length;
}

const averageGrade = calculateAverageGrade(students);
console.log(`The average grade is: ${averageGrade}`);

// 5. Book Store Inventory System
//Store books in an object.
//Add functionality to check availability
// and restock books.

const listOfBooks = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    year: 2008,
    stockCount: 15,
  },
  {
    id: 2,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt and David Thomas",
    year: 2019,
    stockCount: 25,
  },
  {
    id: 3,
    title: "Eloquent JavaScript, 3rd Edition",
    author: "Marijn Haverbeke",
    year: 2018,
    stockCount: 30,
  },
  {
    id: 4,
    title: "Design Patterns",
    author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
    year: 1994,
    stockCount: 0,
  },
  {
    id: 5,
    title: "Structure and Interpretation of Computer Programs (SICP)",
    author: "Harold Abelson and Gerald Jay Sussman",
    year: 1996,
    stockCount: 8,
  },
];

function isBookAvailable(id) {
  const book = listOfBooks.find((book) => book.id === id);
  if (book) {
    return true;
  }
  return false;
}

function restockBook(id, quantite) {
  const book = listOfBooks.find((book) => book.id === id);
  if (book) {
    book.stockCount += quantite > 0 ? quantite : 0;
    console.log(book);
  } else {
    console.log("book not find");
  }
}

console.log(isBookAvailable(2));
restockBook(0, 2);

//6. What is the difference between
// Object.keys() and Object.entries()?
// Explain with examples
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
};

// Object.keys() returns an array of an object's own enumerable property names (the keys).
console.log("--- Object.keys() ---");
const carKeys = Object.keys(car);
console.log(carKeys); // Output: [ 'make', 'model', 'year' ]

// Object.entries() returns an array of an object's own enumerable string-keyed property [key, value] pairs.
console.log("\n--- Object.entries() ---");
const carEntries = Object.entries(car);
console.log(carEntries); // Output: [ [ 'make', 'Toyota' ], [ 'model', 'Camry' ], [ 'year', 2022 ] ]

//7. How do you check if an object
// has a certain property?

// we can check if an object
// has a certain property
// with in operator
const hasProperty = "make" in car ? true : false;
console.log(hasProperty);

// we can check if an object
// has a certain property
// with methode hasOwn
console.log(Object.hasOwn(car,"mak"));


//8. What will be the output and why?
const person2 = { name: "John" };
const newPerson = person2;
newPerson.name = "Doe";
console.log(person2.name);// Doe
// because person2 and newPerson
// are pointing in the same object
// then when we modify newPerson
// this will affect person2

// What’s the best way to
// deeply copy a nested object?
// Expalin with examples
const obj1 = {
  a: 1,
  b: {
    c: 2
  }
}
console.log(obj1.b.c) // 2
const obj2 = structuredClone(obj1);
obj1.b.c = 3;
console.log(obj2.b.c);// 2
console.log(obj1.b.c);// 3

//10. Loop and print values using
// Object destructuiring

const users = [
  {
    name: "Alex",
    address: "15th Park Avenue",
    age: 43,
  },
  {
    name: "Bob",
    address: "Canada",
    age: 53,
  },
  {
    name: "Carl",
    address: "Bangalore",
    age: 26,
  },
];

users.forEach(user => {
  let {
    name: userName,
    address: userAdresse,
    age: userAge
  } = user;
  console.log(userName, userAdresse, userAge);
});