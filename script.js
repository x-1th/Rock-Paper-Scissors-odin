






function getComputerChoice() {
    let computerRandom = Math.floor(Math.random() * 3) + 1;
    let randomStr = "";

    console.log("Computer random number:", computerRandom);
    console.log("Before switch:", randomStr);

    switch (computerRandom) {
        case 1:
            randomStr = "rock";
            console.log("Computer choice:", randomStr);
            break;
        case 2:
            randomStr = "paper"
            console.log("Computer choice:", randomStr);
            break;
        case 3:
            randomStr = "scissors"
            console.log("Computer choice:", randomStr);
            break;
        default:
            console.log("wrong choice");
    }


    return randomStr;

}

getComputerChoice();


function getHumanChoice() {
    let userInput = prompt("Rock, Paper Or Scissors ?").toLowerCase();

    switch (userInput) {
        case "rock":
            console.log(`ur choice is : ${userInput}`);
            break;
        case "paper":
            console.log(`ur choice is : ${userInput}`);
            break;
        case "scissors":
            console.log(`ur choice is : ${userInput}`);
            break;

        default:
            console.log("wrong choice");
    }


    return userInput;

}


getHumanChoice();