const type = ["Rock", "Paper", "Scissors"];

function computerPlay(){

    //return random number between 0 and 2
    return Math.floor(Math.random() * 3);
}

function convertHumanChoice(choice){
    let humanChoice = "";
    choice = choice.toLowerCase();
    return choice.charAt(0).toUpperCase() + choice.slice(1);
}

function playRound(playerSelection, computerSelection){
    
}

function game(){
    let count = 1;

    while(count <=5){
        console.log(playRound());
    }
}