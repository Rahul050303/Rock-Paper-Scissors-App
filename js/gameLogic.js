// gameLogic.js
import { saveScore } from './localStorage.js';
import { updateScoreBoard, showResult } from './ui.js';

let score = { wins: 0, losses: 0, ties: 0 };

export function setScore(newScore) {
    score = newScore;
}

export function getScore() {
    return score;
}

export function play(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'rock') {
        if (computerMove === 'rock') result = 'tie';
        else if (computerMove === 'paper') result = 'lose';
        else result = 'win';
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') result = 'win';
        else if (computerMove === 'paper') result = 'tie';
        else result = 'lose';
    } else if (playerMove === 'scissors') {
        if (computerMove === 'rock') result = 'lose';
        else if (computerMove === 'paper') result = 'win';
        else result = 'tie';
    }

    if (result === 'win') score.wins++;
    else if (result === 'lose') score.losses++;
    else score.ties++;

    saveScore(score);
    updateScoreBoard(score);
    showResult(result, computerMove, playerMove);
}

export function resetScore() {
    score = { wins: 0, losses: 0, ties: 0 };
    saveScore(score, true);
    updateScoreBoard(score);
}

export function pickComputerMove() {
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3) return 'rock';
    else if (randomNumber < 2 / 3) return 'paper';
    else return 'scissors';
}
