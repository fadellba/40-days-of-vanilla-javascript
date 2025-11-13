//1. What will be the output of the following code and why?
// let user = "Alice";

// function outer() {
//   function inner() {
//     console.log(user); // Bob
//   }
//   let user = "Bob";
//   inner();
// }

// outer();

//2. What is the mistake in the code below?
// let total = 0; // Global, bad practice

// function add(num) {
//   total += num;
// }

// add(5);
// add(10);
// console.log(total);

//3. Create a function with a nested function and log a variable from the parent function.
// function parent() {
//   let myVar = "JavaScript";
//   function child() {
//     console.log(myVar);
//   }
//   child();
// }

// parent();

//4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?
// function myFunc() {
//   for (let i = 0; i < 10; i++) {
//     let varInsideLoop = i; // ReferenceError
//     //var varInsideLoop = i; // 9
//   }
//   console.log(varInsideLoop);
// }

//myFunc();

//5. Write a function that tries to access a variable declared inside another function.
// function outer() {
//     console.log(innerVar); // RefferenceError
//     function inner() {
//         let innerVar = "innerVar";
//     }
// }

//outer();

{
    // console.log(a);// RefferenceError
    //                 //  because we are in tdz of a
    // let a = 10;
}

//7. Where is the age variable accessible?
// function showAge() {
//   let age = 25;
//   console.log(age);
// }

// console.log(age); //RefferenceError because
// C: age is only accessible inside the showAge()

//8. What will be the output and explain the output?
// let message = "Hello";

// function outer() {
//   let message = "Hi";

//   function inner() {
//       console.log(message);// Hi because the scope chain:
//       //Firstly javascript fetch message inside inner() and not found
//       //then fetch message in outer() and find
//   }

//   inner();
// }

// outer();

//9. What will be the output and why?

// let x = "Global";

// function outer() {
//   let x = "Outer";

//   function inner() {
//     let x = "Inner";
//       console.log(x);// Inner, because x is defined in
//       //inner()
//   }

//   inner();
// }

// outer();

//10. What will be the output and why?
function counter() {
  let count = 0;
  return function () {
    count--;
    console.log(count);
  };
}

const reduce = counter();
reduce(); // -1
reduce(); // -2






