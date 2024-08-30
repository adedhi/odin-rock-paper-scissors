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
            result_display.firstElementChild.innerHTML = "You win! " + capitalize(humanChoice) + " beats " + capitalize(computerChoice);
            return 0;
        case((humanChoice == "rock") && (computerChoice == "rock")):
        case((humanChoice == "scissors") && (computerChoice == "scissors")):
        case((humanChoice == "paper") && (computerChoice == "paper")):
            result_display.firstElementChild.innerHTML = "Draw! You both picked " + capitalize(humanChoice);
            return 1;
        case((humanChoice == "rock") && (computerChoice == "paper")):
        case((humanChoice == "scissors") && (computerChoice == "rock")):
        case((humanChoice == "paper") && (computerChoice == "scissors")):
            result_display.firstElementChild.innerHTML = "You lose! " + capitalize(humanChoice) + " is beaten by " + capitalize(computerChoice);
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

function playerClicked(humanChoice) {
    if ((humanScore >= 5) || (computerScore >= 5)) {
        return;
    }
    let round_result = playRound(humanChoice, getComputerChoice());
    if (round_result == 0) {
        humanScore ++;
        human_score_display.firstElementChild.innerHTML = humanScore.toString();
    } else if (round_result == 2) {
        computerScore ++;
        computer_score_display.firstElementChild.innerHTML = computerScore.toString();
    }

    if ((humanScore >= 5) || (computerScore >= 5)) {
        rock_button.removeEventListener("click", function(){playerClicked("rock")});
        paper_button.removeEventListener("click", function(){playerClicked("paper")});
        scissors_button.removeEventListener("click", function(){playerClicked("scissors")});
        if ((humanScore >= 5)) {
            result_display.firstElementChild.innerHTML = "You win rock, paper, scissors!";
        } else {
            result_display.firstElementChild.innerHTML = "The computer wins rock, paper, scissors...";
        }
    }
}

let humanScore = 0;
let computerScore = 0;

const human_score_display = document.querySelector(".human_score");
const result_display = document.querySelector(".result");
const computer_score_display = document.querySelector(".computer_score");
const rock_button = document.querySelector("#rock");
const paper_button = document.querySelector("#paper");
const scissors_button = document.querySelector("#scissors");

human_score_display.firstElementChild.innerHTML = "0"
result_display.firstElementChild.innerHTML = "";
computer_score_display.firstElementChild.innerHTML = "0"

rock_button.addEventListener("click", function(){playerClicked("rock")});
paper_button.addEventListener("click", function(){playerClicked("paper")});
scissors_button.addEventListener("click", function(){playerClicked("scissors")});
