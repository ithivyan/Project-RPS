/* 

Your game will be played against the computer. 
You will write a function that randomly returns “rock”, “paper” or “scissors”.

Your game will be played by a human player. 
You will write a function that takes the user choice and returns it.

Your game will keep track of the players score. 
You will write variables to keep track of the players score.

Your game will be played round by round. 
You will write a function that takes the human and computer player choices as arguments, 
plays a single round, increments the round winner’s score and logs a winner announcement.

In our UI, the player should be able to play the game by clicking on buttons, 
rather than typing their answer in a prompt.

*/

let humanScore = 0;
let computerScore = 0;
let computerPickDisplay = document.querySelector("#computer-pick")
let scoreDisplay = document.querySelector("#score-display")
let scoreStore = ""
let rockBtn = document.querySelector("#btn-rock")
let paperBtn = document.querySelector("#btn-paper")
let scissorsBtn = document.querySelector("#btn-scissors")



// getComputerChoice() returns either Rock, Paper or Scissors at random using the Math.random function.
function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*3);
    const playWords = ['Rock', 'Paper', 'Scissors'];
    return playWords[randomNum];
}

//the playRound(args1, args2) function runs the logic, 
// checking the 7 posiblities with if else condtional statements.
function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        scoreStore = "Thats a tie!"

    }
    else if (humanChoice == 'Rock' && computerChoice == 'Paper'){
        scoreStore = "You lose! Paper Beats Rock"
        computerScore +=1; 
    }
    else if (humanChoice == 'Rock' && computerChoice == 'Scissors'){
        scoreStore = "You Win! Rock Beats Scissors"
        humanScore +=1; 
    }
    else if (humanChoice == 'Paper' && computerChoice == 'Rock'){
        scoreStore = "You Win! Paper Beats Rock"
        humanScore +=1; 
    }
    else if (humanChoice == 'Paper' && computerChoice == 'Scissors'){
        scoreStore = "You lose! Scissors Beats Paper"
        computerScore +=1; 
    }
    else if (humanChoice == 'Scissors' && computerChoice == 'Rock'){
        scoreStore = "You lose! Rock Beats Scissors"
        computerScore +=1;
    }
    else if (humanChoice == 'Scissors' && computerChoice == 'Paper'){
        scoreStore = "You Win! Scissors Beats Paper"
        humanScore +=1;
    }

    return scoreStore

}

//the playGame() function checks if either one of the players have reached a score of 5; if they have then
// it displays a message and disables the player's buttons.

function playGame(){
    if ((humanScore >= 5) || (computerScore >= 5)){
        if (humanScore > computerScore){
            scoreStore = "Congratulation you have won against the computer!"
        }
        else if (humanScore < computerScore){
            scoreStore = "Sorry, you have lost against the computer!"
        }
        else if (humanScore == computerScore){
            scoreStore = "It a draw!"
        }
        rockBtn.disabled = true
        paperBtn.disabled = true
        scissorsBtn.disabled = true

        return scoreStore
    }
}

// Each button calls on the playRound() function and the playGame() function.
rockBtn.addEventListener('click', function(){
    playRound('Rock', getComputerChoice())
    playGame()
    scoreDisplay.innerHTML = `${scoreStore} <br> Computer: ${computerScore} <br> Your Score: ${humanScore}`
})

paperBtn.addEventListener('click', function(){
    playRound('Paper', getComputerChoice())
    playGame()
    scoreDisplay.innerHTML = `${scoreStore} <br> Computer: ${computerScore} <br> Your Score: ${humanScore}`
})
scissorsBtn.addEventListener('click', function(){
    playRound('Scissors', getComputerChoice())
    playGame()
    scoreDisplay.innerHTML = `${scoreStore} <br> Computer: ${computerScore} <br> Your Score: ${humanScore}`
})





