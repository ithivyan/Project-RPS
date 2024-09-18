function getComputerChoice() {
    let randomNum = Math.floor(Math.random()*3);
    const playWords = ['Rock', 'Paper', 'Scissors'];
    
    return playWords[randomNum];
    
}

console.log(getComputerChoice());