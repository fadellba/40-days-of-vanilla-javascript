function rps() {
    console.log("=== Welcom in Rock, Paper and cisor game ===");
    const userInput =
        prompt("Enter rock, paper or cisor!").
        trim().toLowerCase();
    let computerChoice =
        Math.floor((Math.random() * 3) + 1);
    
    switch (computerChoice) {
        case 1: computerChoice = "rock";
            break;
        case 2: computerChoice = "paper";
            break;
        case 3: computerChoice = "cisor";
            break;
    }
    
    console.log("Your choice: " + userInput);
    console.log("Computer choice: " + computerChoice);

    if (computerChoice === userInput) {
        console.log("There is no winner, egality!");
    } else if (
        userInput === "rock" && computerChoice === "cisor" ||
        userInput === "cisor" && computerChoice === "paper" ||
        userInput === "paper" && computerChoice === "rock"
    ) {
        console.log("🎉Great you are the winner🎉");
    } else if (
        computerChoice === "rock" && userInput === "cisor" ||
        computerChoice === "cisor" && userInput === "paper" ||
        computerChoice === "paper" && userInput === "rock"
    ) {
        console.log("😋 The computer win!");
    } else {
        console.log("We don't understand your input.");
    }

    const response = prompt("Do you wanna continue the game?").
    trim().toLowerCase();
    const playAgain = response ? response : "no";

    if (playAgain === "yes") {
        rps();
    } else {
        console.log("😃Bye Bye...! See you again.");
    }

}

rps();