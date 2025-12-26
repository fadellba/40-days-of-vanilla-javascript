//         "Situation"	                                "Value"
// At the Global Scope	                        |  window (in browsers) or global (in Node.js)
// Inside an Object Method	                    |  The object that owns the method
// Inside a Standalone Non-Arrow Function	    |  window (or undefined in Strict Mode)
// Inside an Arrow Function (Standalone)	    |  The this value of the enclosing lexical context
// Inside an Arrow Function (as Object Method)  |  The this value of the enclosing lexical context (usually window)
// Inside an Object created with a Constructor  |  Function	The newly created object instance

//At the Global Scope
console.log(this); // window object

//Inside an Object Method
const student = {
  name: "Fadel",
  displayName: function () {
    console.log(this.name);
  },
};

student.displayName(); // Fadel

// Inside an Arrow Function (Standalone)

const result = () => console.log(this);

result(); // window object

//Inside an Arrow Function (as Object Method)
const usr = {
  name: "Fadel",
  displayName: () => this.name,
};

console.log(usr.displayName()); //undefined

//Inside an Object created with a Constructor
function person(firstName, lastName) {
  (this.firstName = firstName), (this.lastName = lastName);
}

const p = new person("Fadel", "BA");
console.log(p);

//2. What is the problem here? Fix it to log the correct name and explain the fix

// const user = {
//   name: "tapaScript",
//   greet: () => {
//     console.log(`Hello, ${this.name}!`);
//   },
// };

// user.greet(); Hello, ! the problem is that this is is defined
// inside an arrow function witch doesn't has there own this where
// this value of the enclosing lexical context (usually window)

//correction
const user = {
  name: "tapaScript",
  greet: function () {
    return () => {
      console.log(`Hello, ${this.name}!`);
    };
  },
};

const u2 = user.greet();
u2(); // that work because the arrow function is boxing inside another function

//3. Can you explain what is the problem here and fix the issue to log the correct name?
const obj = {
  name: "Tom",
  greet: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

const greetFn = obj.greet;
greetFn(); // hello, undefined because javascript will consider greetFn is a independant stanlone function

obj.greet(); // Hello, Tom! beacause greet is attached to a obj object

//4. What is the problem with the following code? Why isn't it logging the name correctly?
const user2 = {
  name: "Alex",
  greet: function () {
    function inner() {
      console.log(`Hello, ${this.name}!`);
    }
    inner();
  },
};

user2.greet(); // hello, undefined because this is defined inside an imbriqued standalone function then javascript will not consider it as attached to the user2 object

//5. Create a Sports constructor function that takes name and number of players
//  as arguments and assigns them using this keyword. Then, create two sports
// instances and log their details
function Sports(name, numberOfPlayers) {
  this.name = name;
  this.numberOfPlayers = numberOfPlayers;
}

const football = new Sports("Football", "11");
const basketball = new Sports("Basketball", "5");
console.log(football);
console.log(basketball);

//6. Can you attach the car1's describe() method to car2 object?
// Give all possible solutions that you can think of
const car1 = {
  brand: "Audi",
  model: "A8",
  describe: function () {
    console.log(`This car is a ${this.brand} ${this.model}.`);
  },
};

const car2 = {
  brand: "BMW",
  model: "X1",
};

car1.describe.call(car2);
car1.describe.apply(car2);
const car2B = car1.describe.bind(car2);
car2B();

//7. What will be the output of the following code and why?
const personn = {
  name: "Charlie",
  sayHello: function () {
    console.log(this.name);
  },
  sayHelloArrow: () => {
    console.log(this.name);
  },
};

personn.sayHello();// Charlie because in js when this is defined in standalone
//function witch is a propertie of an object it will refer to the object where 
// the function is defined 
personn.sayHelloArrow();//empty string doesn mean undefined because
//the this value of the enclosing lexical context of this is the global object
// then name is not defined