let humanScore = document.querySelector("#player-score");
let PCScore = document.querySelector('#pc-score');
let alertMessage = document.querySelector('#alert-messages')
let PC = 0;
let player = 0;
let roundCount = 1;



// we use the .forEach method to iterate through each button
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", () => {
    const playerChoice = button.id;
    const PCAnswer = getComputerChoice();
    playRound(playerChoice, PCAnswer);
    if (PC == 5 || player == 5) {
        if (PC > player) {
            alert("PC Wins the Game!");
        } else if ( PC<player){
            alert("Player Wins the game!");
        }
    }
    });
});

function playRound(playerChoice, answer){
        
        if (playerChoice != answer) {
            if (playerChoice === "Rock" && answer === "Paper") {
                console.log("PC Chose: "+answer+", PC Wins!");
                alertMessage.textContent = "PC Chose: "+answer+", PC Wins!"
                PC ++;
                PCScore.textContent = PC;
                roundCount ++;
            } else if (playerChoice === "Rock" && answer === "Scissors"){
                console.log("PC Chose: "+answer+", Player wins!");
                alertMessage.textContent = "PC Chose: "+answer+", Player wins!"
                player ++;
                humanScore.textContent = player;
                roundCount ++;
            } else if (playerChoice === "Scissors" && answer === "Paper"){
                console.log("PC Chose: "+answer+", Player wins!");
                alertMessage.textContent = "PC Chose: "+answer+", Player wins!"
                player ++;
                humanScore.textContent = player;
                roundCount ++;
            } else if (playerChoice === "Scissors" && answer === "Rock"){
                console.log("PC Chose: "+answer+", PC wins!");
                alertMessage.textContent = "PC Chose: "+answer+", PC Wins!"
                PC ++;
                PCScore.textContent = PC;
                roundCount ++;
            } else if (playerChoice === "Paper" && answer === "Scissors"){
                console.log("PC Chose: "+answer+", PC Wins!");
                alertMessage.textContent = "PC Chose: "+answer+", PC Wins!"
                PC ++;
                PCScore.textContent = PC;
                roundCount ++;
            } else if (playerChoice === "Paper" && answer === "Rock"){
                console.log("PC Chose: "+answer+", Player wins!");
                alertMessage.textContent = "PC Chose: "+answer+", Player wins!"
                player ++;
                humanScore.textContent = player;
                roundCount ++;
            }
        } else {
            console.log("PC Chose: "+answer+ " so it's a draw!");
            return;
        } 
    console.log("Scores: Player: "+player+" // PC: "+PC);
}


function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    let selectedChoice = Math.floor(Math.random() * choices.length);
    let answer = choices[selectedChoice];
    return answer;
}

