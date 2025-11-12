/* 1. The TDZ is the period between entering 
a block (such as a { ... } or a function) and 
the moment the interpreter reaches the line 
where the variable `let` or `const` is declared 
and initialized. 
Attempting to access the variable during this 
time results in a ReferenceError.
 */

{
  console.log(a); // tdz for a start
  //
  //
  let b = "tapascript the best!"; // tdz for b ends
  //
  //
  console.log(b);
  //
  //
  console.log(c); //tdz for c start
  //
  //
  let a = 10; // tdz for a end
  //
  //
  const c = true; // tdz for c end
}

// 2. It consists of the prior reservation of memory space for variables and functions.

{
  myFunction();

  function myFunction() {
    console.log(data);
    var data;
  }
}
