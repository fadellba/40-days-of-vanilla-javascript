function rps() {
  console.log("=== Welcom in Rock, Paper and cisor game ===");
  const userInput = prompt("Enter rock, paper or cisor!").trim().toLowerCase();
  let computerChoice = Math.floor(Math.random() * 3 + 1);

  switch (computerChoice) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "cisor";
      break;
  }

  console.log("Your choice: " + userInput);
  console.log("Computer choice: " + computerChoice);

  if (computerChoice === userInput) {
    console.log("There is no winner, egality!");
  } else if (
    (userInput === "rock" && computerChoice === "cisor") ||
    (userInput === "cisor" && computerChoice === "paper") ||
    (userInput === "paper" && computerChoice === "rock")
  ) {
    console.log("🎉Great you are the winner🎉");
  } else if (
    (computerChoice === "rock" && userInput === "cisor") ||
    (computerChoice === "cisor" && userInput === "paper") ||
    (computerChoice === "paper" && userInput === "rock")
  ) {
    console.log("😋 The computer win!");
  } else {
    console.log("We don't understand your input.");
  }

  const response = prompt("Do you want play again?(yes|no)")
    .trim()
    .toLowerCase();
  const playAgain = response ? response : "no";

  if (playAgain === "yes") {
    rps();
  } else {
    console.log("😃Bye Bye...! See you again.");
  }
}

rps();

function secretNumberGuessing() {
  const secretNumber = Math.floor(Math.random() * 10 + 1);
  let input, count = 0;
  do {
    input = Number(prompt("Enter a number between 1 and 10"));
    if (isNaN(input)) {
      console.log("Please enter a numerical value");
    } else if (input < 1 || input > 20) {
      console.log("The number must be in range 1 and 10!");
    } else if (input < secretNumber) {
      console.log("great than");
    } else if (input > secretNumber) {
      console.log("less than");
    } else if (input === secretNumber) {
      console.log("🎊Y'r right!🎊");
    }
    count++;
  } while (
    (input < 1 || input > 20) ||
    isNaN(input) ||
    (input < secretNumber || input > secretNumber)
  );
  console.log("After " + count + " input");

  const response = prompt("Do you want play again?(yes|no)")
    .trim()
    .toLowerCase();
  const playAgain = response ? response : "no";

  if (playAgain === "yes") {
    rps();
  } else {
    console.log("😃Bye Bye...! See you again.");
  }
}

secretNumberGuessing();
