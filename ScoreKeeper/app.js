const maxScore = document.querySelector('#maxScore');
const scoreboard = document.querySelector('#scoreboard');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');
const reset = document.querySelector('#reset');

let playerScore1 = 1;
let playerScore2 = 1;

player1.addEventListener('click', function(){
    const maxScoreValue = maxScore.value;
    player1score ++;
    scoreboard.innerText = `${player1score} to ${player2score}`;
    if (maxScoreValue === player1score){
        player1.diasbled
    }
});