//1. What will be the output of the following code and why?
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counterr = outer();
counterr(); // 1
counterr(); // 2
// Explanation:
// The `inner` function forms a "closure" with 
// the scope of the `outer` function.

// Thanks to this closure, `inner` retains access to the `count` variable even after
// `outer` has finished executing. Each time `counter` is called (which is a reference to `inner`),
// the same `count` variable is modified, thus preserving its state between calls.

//2. What will be the output and why?
function testClosure() {
  let x = 10;
  return function () {
    return x * x;
  };
}
console.log(testClosure()());
// The output will be 100.
// 1. `testClosure()` is called and returns the inner anonymous function.
// 2. This returned function maintains a closure over the scope of `testClosure`,
//    so it still has access to the variable `x`.
// 3. The second pair of parentheses `()` immediately invokes the returned function.
// 4. The inner function calculates `x * x` (10 * 10) and returns 100.

//3. Create a button dynamically and attach a 
// click event handler using a closure. 
// The handler should count and log how many times 
// the button was clicked.
function timer() {
  let count = 0;
    document.
        getElementById("btn").
        addEventListener("click", () => {
    count++;
    console.log(count);
  });
}

timer();

//4. Write a function createMultiplier(multiplier) that returns another function to multiply numbers.
function createMultiplier(multiplier) {
  return (number) => {
    return multiplier * number;
  };
}

const multiplyByTwo = createMultiplier(2);
console.log(multiplyByTwo(9));

//5. What happens if a closure refers to an object?
// 1. The object is immediately garbage collected.
// 2. The object remains in memory as long as the closure exists.
// 3. The object is automatically cloned.
// 4. None of the above.
// My answer: 2 -> Correct.

// Explanation with an example:
function createPerson(name) {
  let person = {
    name: name,
    age: 30,
  };

  // This returned function is a closure. It "closes over" the 'person' object.
  return {
    celebrateBirthday: function () {
      person.age++;
      console.log(`${person.name} is now ${person.age} years old.`);
    },
  };
}

const john = createPerson("John");
john.celebrateBirthday(); // John is now 31 years old.
john.celebrateBirthday(); // John is now 32 years old.

// Even though createPerson() has finished executing, the 'person' object
// is not garbage collected because the closure (celebrateBirthday)
// still holds a reference to it.

//6. Write a function factory of counter to increment,
// decrement, and reset a counter. Use closure to
// refer the count value across the functuions.

function createCounter() {
    let count = 0;
    return {
        "increment": () => {
            count++;
            console.log(count);
        },
        "decrement": () => {
            count--;
            console.log(count);
        },
        "reset": () => {
            count = 0;
            console.log(count);
        }
    }
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
counter.reset();