

let humanScore = 0;
let PCScore = 0; 
roundCount = 0;

while (roundCount <5) {
    const humanChoice = getPlayerChoice();
    const PCAnswer = getComputerChoice();
    playRound(humanChoice, PCAnswer);
}

if (PCScore > humanScore) {
    console.log("PC Wins the Game!!!");
} else if ( PCScore<humanScore){
    console.log("Player Wins the game!!!");
} else {
    console.log("It's a draw !!");
}




function playRound(playerChoice, answer){
        if (playerChoice != answer) {
            if (playerChoice === "Rock" && answer === "Paper") {
                console.log("PC Chose: "+answer+", PC Wins!");
                PCScore ++;
                roundCount ++;
            } else if (playerChoice === "Rock" && answer === "Scissors"){
                console.log("PC Chose: "+answer+", Player wins!");
                humanScore ++;
                roundCount ++;
            } else if (playerChoice === "Scissors" && answer === "Paper"){
                console.log("PC Chose: "+answer+", Player wins!");
                humanScore ++;
                roundCount ++;
            } else if (playerChoice === "Scissors" && answer === "Rock"){
                console.log("PC Chose: "+answer+", PC wins!");
                humanScore ++;
                roundCount ++;
            } else if (playerChoice === "Paper" && answer === "Scissors"){
                console.log("PC Chose: "+answer+", PC Wins!");
                humanScore ++;
                roundCount ++;
            } else if (playerChoice === "Paper" && answer === "Rock"){
                console.log("PC Chose: "+answer+", Player wins!");
                humanScore ++;
                roundCount ++;
            }
        } else {
            console.log("PC Chose: "+answer+ " so it's a draw!");
            roundCount ++;
            return;
        } 
    console.log("Scores: Player: "+humanScore+" // PC: "+PCScore);
}


function getPlayerChoice(){
    let playerChoice = prompt("Choose Rock, Paper or Scissors: ");
    if (playerChoice === "Rock" || playerChoice === "Scissors" || playerChoice === "Paper"){
        return playerChoice;
    } else {
        console.log("not a valid input");
    }
    
}

function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    let selectedChoice = Math.floor(Math.random() * choices.length);
    let answer = choices[selectedChoice];
    return answer;
}

