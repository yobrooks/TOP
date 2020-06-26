const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

/* Function that returns the computer's pick*/
function computerPlay(){
    //return random number between 0 and 2
    return Math.floor(Math.random() * 3);
}

/*Function to convert human choice from string to number*/
function convertHumanChoice(choice){
    choice = choice.toLowerCase();
    if(choice === "rock"){
        return ROCK;
    }
    else if(choice === "paper"){
        return PAPER;
    }
    else if(choice === "scissors"){
        return SCISSORS;
    }
    else{
        return -1;
    }
}

/* Function to check for a human win; returns a bool */
function checkForWin(human, computer){
    let win = false;
    if(human === ROCK && computer === SCISSORS){
       win = true;
    }
    else if(human === PAPER && computer === ROCK){
        win = true;
    }
    else if(human === SCISSORS && computer === PAPER){
       win = true;
    }

    return win;
}

/* Function to convert the integer back to a string for the message*/
function convertChoiceToString(choice){
    if(choice === ROCK){
        return "Rock";
    }
    else if(choice === PAPER){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

/* Function to generate a game message based on who won */
function generateGameMessage(win, human, computer){
    let winMessage = "";
    if(win){
        winMessage = "You Win! " + convertChoiceToString(human) + " beats " + convertChoiceToString(computer);
    }
    else{
        winMessage = "You Lose! " + convertChoiceToString(computer) + " beats " + convertChoiceToString(human);
    }

    return winMessage;
}

/* Function to play a round of the game*/
function playRound(playerSelection, computerSelection){
    let message = "";
    if(playerSelection === -1){
       message = "Player choice invalid. Nobody wins."; 
    }
    else if(playerSelection === computerSelection){
        message = "It's a tie!";
    }
    else{
        let humanWin = checkForWin(playerSelection, computerSelection);
        message = generateGameMessage(humanWin, playerSelection, computerSelection);
    }

    return message;
}

/* Function to play five rounds of the game */
function game(){
    let count = 1;

    while(count <=5){
        //ask the user for their choice
        let humanChoice = prompt();
        //convert the user string input to an integer
        let humanChoiceInt = convertHumanChoice(humanChoice);
        //get random computer choice as integer
        let computerChoiceInt = computerPlay();
        //play the round and display results
        console.log(playRound(humanChoiceInt, computerChoiceInt));
    }
}

game();