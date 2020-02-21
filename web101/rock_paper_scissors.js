let rps = ['rock', 'paper', 'scissors'] 

function play() {
    let userSelection = prompt("Please selection one: rock, paper, scissors")
    let computerSelection = getRandomComputerSelection()
    console.log(computerSelection)
    let result
    if (userSelection == "rock") {
        if (computerSelection == "rock") {
            result = "Tied"
        } else if (computerSelection == "paper") {
            result = "Lose"
        } else if (computerSelection == "scissors") {
            result = "win"
        }
    } else if (userSelection == "paper") {
        if (computerSelection == "rock") {
            result = "Win"
        } else if (computerSelection == "paper") {
            result = "Tied"
        } else if (computerSelection == "scissors") {
            result = "Lose"
        }
    } else if (userSelection == "scissors") {
        if (computerSelection == "rock") {
            result = "Lose"
        } else if (computerSelection == "paper") {
            result = "Win"
        } else if (computerSelection == "scissors") {
            result = "Tied"
        }
    }

    alert(result)
}

function getRandomComputerSelection() {
    let selection = rps[Math.floor(Math.random() * 3)];
    return selection
}