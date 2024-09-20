/* 

Your game will be played against the computer. You will write a function that randomly returns “rock”, “paper” or “scissors”.

Your game will be played by a human player. You will write a function that takes the user choice and returns it.

Your game will keep track of the players score. You will write variables to keep track of the players score.

Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

*/

let humanScore = 0;
let computerScore = 0;

// getComputerChoice() returns either Rock, Paper or Scissors at random using the Math.random function.
function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*3);
    const playWords = ['Rock', 'Paper', 'Scissors'];
    return playWords[randomNum];
}

//Prompts the user for a choice, handles the case sensitive issues.
function getHumanChoice(){
    let userChoicePromt = prompt("Input Rock, Paper or Scissors");
    userChoice = userChoicePromt.toLowerCase();

    if (userChoice == 'rock'){
        return 'Rock';
    }
    else if (userChoice == 'paper'){
        return 'Paper';
    }
    else if (userChoice == 'scissors'){
        return 'Scissors';
    }
    else{
        return 'Please enter valid input';
    }
}

//the playRound(args1, args2) function runs the logic, checking the 7 posiblities with if else condtional statements.
function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        console.log("Thats a tie!");
    }
    else if (humanChoice == 'Rock' && computerChoice == 'Paper'){
        console.log("You lose! Paper Beats Rock");
        computerScore +=1; 
    }
    else if (humanChoice == 'Rock' && computerChoice == 'Scissors'){
        console.log("You Win! Rock Beats Scissors");
        humanScore +=1; 
    }
    else if (humanChoice == 'Paper' && computerChoice == 'Rock'){
        console.log("You Win! Paper Beats Rock");
        humanScore +=1; 
    }
    else if (humanChoice == 'Paper' && computerChoice == 'Scissors'){
        console.log("You lose! Scissors Beats Paper");
        computerScore +=1; 
    }
    else if (humanChoice == 'Scissors' && computerChoice == 'Rock'){
        console.log("You lose! Rock Beats Scissors");
        computerScore +=1;
    }
    else if (humanChoice == 'Scissors' && computerChoice == 'Paper'){
        console.log("You Win! Scissors Beats Paper");
        humanScore +=1;
    }
}

//playGame() function uses a for loop which then calls getHumanChoice() and getComputerChoice(), taking their respective return values and passing them to the playRound(args1, args2).
//Once the loop exists, the function compares the scores and gives a final winner or loser announcment.
function playGame(){
    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        continue;
    }
    if (humanScore > computerScore){
        console.log("Congratulation you have won against the computer!");
    }
    else if (humanScore < computerScore){
        console.log("Sorry, you have lost against the computer!");      
    }
    else if (humanScore == computerScore){
        console.log("It a draw!");
    }
}

// The play game function is called to run the game.
playGame();