let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let computerRandom = Math.floor(Math.random() * 3) + 1;
    let randomStr = "";

    switch (computerRandom) {
        case 1:
            randomStr = "rock";
            break;
        case 2:
            randomStr = "paper"
            break;
        case 3:
            randomStr = "scissors"
            break;
        default:
            console.log("wrong choice");
    }

    console.log("Computer choice:", randomStr);
    return randomStr;

}



function getHumanChoice() {
    let userInput = prompt("Rock, Paper Or Scissors ?").toLowerCase();

    switch (userInput) {
        case "rock":
            break;
        case "paper":
            break;
        case "scissors":
            break;

        default:
            console.log("wrong choice");
    }


    console.log(`ur choice is : ${userInput}`);
    return userInput;

}


function playRound(humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log(`user win!, rock beats scissors!`);
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`user win!, scissors cuts paper!`);
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log(`user win!, paper cover the rock!`);
        humanScore++;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log(`computer win!, rock beats scissors!`);
        computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log(`computer win!, scissors cuts paper!`);
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log(`computer win!, paper cover the rock!`);
        computerScore++;
    } else if (computerChoice === humanChoice) {
        console.log("tie");
    }

}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);