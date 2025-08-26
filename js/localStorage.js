// localStorage.js
import { setScore } from './gameLogic.js';

export function loadScore() {
    const saved = JSON.parse(localStorage.getItem('score'));
    const score = saved || { wins: 0, losses: 0, ties: 0 };
    setScore(score);
    return score;
}

export function saveScore(score, reset = false) {
    if (reset) {
        localStorage.removeItem('score');
    } else {
        localStorage.setItem('score', JSON.stringify(score));
    }
}
