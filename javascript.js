function getComputerChoice() {
    let result = Math.floor(Math.random() * 3);
    console.log(result);
    switch(result) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    while(true) {
        let response = prompt("Please choose [rock], [paper], or [scissors]: ");
        switch(response.toLowerCase()) {
            case "rock":
            case "paper":
            case "scissors":
                return response.toLowerCase();
            case true:
                continue;
        }
    }
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function playRound(humanChoice, computerChoice) {
    switch (true) {
        case((humanChoice == "rock") && (computerChoice == "scissors")):
        case((humanChoice == "scissors") && (computerChoice == "paper")):
        case((humanChoice == "paper") && (computerChoice == "rock")):
            console.log("You win! " + capitalize(humanChoice) + " beats " + capitalize(computerChoice));
            return 0;
        case((humanChoice == "rock") && (computerChoice == "rock")):
        case((humanChoice == "scissors") && (computerChoice == "scissors")):
        case((humanChoice == "paper") && (computerChoice == "paper")):
            console.log("Draw! You both picked " + capitalize(humanChoice));
            return 1;
        case((humanChoice == "rock") && (computerChoice == "paper")):
        case((humanChoice == "scissors") && (computerChoice == "rock")):
        case((humanChoice == "paper") && (computerChoice == "scissors")):
            console.log("You lose! " + capitalize(humanChoice) + " is beaten by " + capitalize(computerChoice));
            return 2;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRound(getHumanChoice(), getComputerChoice());
        switch(result) {
            case 0:
                humanScore ++;
            case 1:
                continue;
            case 2:
                computerScore ++;
        }
    }

    console.log("Your wins: " + humanScore + " | Computer wins: " + computerScore);
}

playGame();