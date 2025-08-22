let isAutoPlaying = false;
let intervalId;

function autoPlay(playerMove){
    if(!isAutoPlaying){
        intervalId = setInterval(function(){
            const playerMove = pickComputerMove();
            play(playerMove);
        },1000);
        isAutoPlaying = true;
    }else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}

function autoPlayButton(){
    const autoPlayElement = document.querySelector('.js-auto-play');
    if(autoPlayElement.textContent === 'Auto Play'){
        autoPlayElement.textContent = 'Stop Auto Play';
    }else{
        autoPlayElement.textContent = 'Auto Play';
    }
}

let score = JSON.parse(localStorage.getItem('score')) || {
    wins : 0,
    losses : 0,
    ties : 0,
};

function updateScoreBoard() {
    document.getElementById('scoreDisplay').textContent =
    `Wins : ${score.wins} , Losses : ${score.losses} , Ties : ${score.ties}`;
}

updateScoreBoard();

function resetScore(){
    score = { wins: 0, losses: 0, ties: 0 };
    localStorage.removeItem('score');
    updateScoreBoard();
}

function play(playerMove){
    const computerMove = pickComputerMove();
    let result = '';

    if(playerMove === 'rock'){
        if(computerMove === 'rock'){
            result = 'tie';
        }else if(computerMove === 'paper'){
            result = 'lose';
        }else {
            result = 'win';
        }
    }else if(playerMove === 'paper'){
        if(computerMove === 'rock'){
            result = 'win';
        }else if(computerMove === 'paper'){
            result = 'tie';
        }else {
            result = 'lose';
        }
    }else if(playerMove === 'scissors'){
        if(computerMove === 'rock'){
            result = 'lose';
        }else if(computerMove === 'paper'){
            result = 'win';
        }else {
            result = 'tie';
        }
    }
    
    if(result === 'win'){
        score.wins++;
    }else if(result === 'lose'){
        score.losses++;
    }else {
        score.ties++;
    }
    
    localStorage.setItem('score', JSON.stringify(score));
    updateScoreBoard();
    
    showResult(result,computerMove,playerMove);
}

function showResult(result, computerMove, playerMove){
    const resultElement = document.querySelector('.js-result');
    
    const images = {
        rock: "https://nehalhazem.github.io/rockPaperScissors.io/img/rock.png",
        paper: "https://sihoonathan.github.io/rock-paper-scissors/assets/img/paper.png",
        scissors: "https://rock-paper-scissors-lilac-alpha.vercel.app/static/media/scissors.png"
    };

    resultElement.innerHTML = `
        <p style="margin: 15px; font-size: 18px;">
            You <strong>${result.toUpperCase()}!</strong>
        </p>
        <p>
            Your choice 
            <img src="${images[playerMove]}" alt="${playerMove}" width="60" style="vertical-align: middle; margin: 0 10px;">
            vs 
            <img src="${images[computerMove]}" alt="${computerMove}" width="60" style="vertical-align: middle; margin: 0 10px;">
            Computer choice
        </p>
    `;
}

function pickComputerMove(){
    const randomNumber = Math.random();
    let computerMove = '';

    if(randomNumber < 1/3) {
        computerMove = 'rock';
    }else if(randomNumber < 2/3) {
        computerMove = 'paper';
    }else {
        computerMove = 'scissors';
    }
    return computerMove;
}
