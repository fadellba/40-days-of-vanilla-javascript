//1. What will be the output of the following code?
try {
  let r = p + 50;
  console.log(r);
} catch (error) {
  console.log("An error occurred:", error.name);
}

//output: ReferenceError

//2. Write a function processPayment(amount)
// that checks if the amount is positive and
// not exceeding balance. If any condition fails,
// throw appropriate errors

function processPayment(amount) {
    let balance = 100;
    try {
        if (amount <= 0) {
            throw new Error("Amount must be greater than 0");
        } else if(amount > balance) {
            throw new Error("insufficient balance");
        } else {
            balance -= amount;
            console.log("payement succes");
        }
    } catch(error) {
        console.log(error.message);
    }
}

processPayment(-1);
processPayment(0);
processPayment(150);
processPayment(50);

//3. Implement a custom error handling system
// for an e-commerce website that categorizes errors as
// UserError;
// PaymentError;
// ServerError;
// EmailError;

function UserError(message) {
    this.name = "UserError";
    this.message = message;
}

function PaymentError(message) {
  this.name = "PaymentError";
  this.message = message;
}

function ServerError(message) {
  this.name = "ServerError";
  this.message = message;
}

function EmailError(message) {
  this.name = "EmailError";
  this.message = message;
}

//4. Simulate an API call function fetchData(url).
// If the URL does not start with "https",
// throw an "Invalid URL" error. Handle it using try...catch

function fetchData(url) {
    try {
        if (!url.startsWith("https")) {
            throw new Error("Invalid URL");
        }
    } catch (error) {
        console.log(error.message);
    }
}

//5. Implement a custom error type ValidationError
// using constructor functions to handle form validation errors
function ValidationError(message) {
    this.name = "ValidationError";
    this.message = message;
}

function validateUser(userInput) {
    try {
        if (userInput.username === "") {
            throw new ValidationError("Username cannot be empty");
        }
        if (userInput.age <= 0) {
            throw new ValidationError("Age must be a positive number");
        }
    } catch (error) {
        console.log(error.message);
    }
}

const userInput = { username: "", age: -2 };
validateUser(userInput);

//6. Write a function readFile(filePath) that simulates
// reading a file. If the file does not exist
// (simulate with a condition), throw a "File not found" error.
// Handle the error with try...catch. Make sure you have code to
// handle releasing the IO resources
function readFile(filePath) {
    console.log("Opening file resource...");
    try {
        if (filePath !== "data.txt") {
            throw new Error("File not found");
        }
        console.log("Reading file content...");
    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        console.log("Releasing IO resources (closing file).");
    }
}

//7. Write a function parseJson(str)
// that takes a JSON string and tries
// to parse it using JSON.parse().
// If parsing fails, catch the error and return "Invalid JSON"
function parseJson(str) {
    try {
        if (!JSON.parse(str)) {
            throw new Error("Invalid JSON");
        }
    } catch (error) {
        console.log(error.message);
    }
}

//8. What is the purpose of throw in JavaScript?
//It creates a new error manually

//9. What does the finally block do in a try...catch statement?
//Runs regardless of whether an error occurs or not

//10. Create a table exaplaining the usages of try, catch, throw, rethrow, error object

// try          |      the code where error can occur
//              |
// catch        |      the code where error is handle
//              |
// rethrow      |      If you catch an error in a catch but
//              |       don't know how to handle it, you can
//              |       "re-throw" it so that a higher-level
//              |       try...catch block takes care of it.
//              |
// error object |      When an error occurs, 
//              |       JavaScript generates an object 
//              |       containing the details. 
//              |      This object typically has 
//              |      two properties