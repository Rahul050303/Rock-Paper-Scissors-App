// main.js
import { play, resetScore, getScore, pickComputerMove } from './gameLogic.js';
import { updateScoreBoard, toggleAutoPlayButton } from './ui.js';
import { loadScore } from './localStorage.js';
import { loadHistory, clearHistory } from './history.js';

let isAutoPlaying = false;
let intervalId;
const overlay = document.querySelector('.js-overlay');
const overlayMenu = document.querySelector('.js-menu-overlay');
const overlayAbout = document.querySelector('.js-about-overlay');
const overlayControls = document.querySelector('.js-controls-overlay');
const overlayHistory = document.querySelector('.js-history-overlay');
const overlaySettings = document.querySelector('.js-settings-overlay');

// Initialize
const initialScore = loadScore();
updateScoreBoard(getScore());

// Buttons
document.querySelector('.js-rock').addEventListener('click', () => play('rock'));
document.querySelector('.js-paper').addEventListener('click', () => play('paper'));
document.querySelector('.js-scissors').addEventListener('click', () => play('scissors'));

document.querySelector('.js-reset-button').addEventListener('click', () => {
    overlay.style.display = 'flex';
});

document.querySelector('.js-yes').addEventListener('click', () => {
    resetScore();
    overlay.style.display = 'none';
});

document.querySelector('.js-no').addEventListener('click', () => {
    overlay.style.display = 'none';
});

overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.style.display = 'none';
});

document.querySelector('.js-auto-play').addEventListener('click', () => {
    autoPlay();
    toggleAutoPlayButton();
});

document.querySelector('.js-main-menu-button').addEventListener('click', () => {
    overlayMenu.style.display = 'flex';
});

overlayMenu.addEventListener('click', (e) => {
    if(e.target === overlayMenu) overlayMenu.style.display = 'none';
});

// About 
document.querySelector('.js-about-button').addEventListener('click', () => {
    overlayAbout.style.display = 'flex';
});

document.querySelector('.js-close-about').addEventListener('click', () => {
    overlayAbout.style.display = 'none';
});

overlayAbout.addEventListener('click', (e) => {
    if (e.target === overlayAbout) overlayAbout.style.display = 'none';
});

// Controls
document.querySelector('.js-controls-button').addEventListener('click', () => {
    overlayControls.style.display = 'flex';
});

document.querySelector('.js-close-controls').addEventListener('click', () => {
    overlayControls.style.display = 'none';
});

overlayControls.addEventListener('click', (e) => {
    if (e.target === overlayControls) overlayControls.style.display = 'none';
});

// History 
document.querySelector('.js-history-button').addEventListener('click', () => {
    loadHistory();
    overlayHistory.style.display = 'flex';
});

document.querySelector('.js-close-history').addEventListener('click', () => {
    overlayHistory.style.display = 'none';
});

document.querySelector('.js-clear-history').addEventListener('click', () => {
    clearHistory();
})

overlayHistory.addEventListener('click', (e) => {
    if (e.target === overlayHistory) overlayHistory.style.display = 'none';
});

// Settings 
document.querySelector('.js-settings-button').addEventListener('click', () => {
    overlaySettings.style.display = 'flex';
});

document.querySelector('.js-close-settings').addEventListener('click', () => {
    overlaySettings.style.display = 'none';
});

overlaySettings.addEventListener('click', (e) => {
    if (e.target === overlaySettings) overlaySettings.style.display = 'none';
});


// Keyboard shortcuts
document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') play('rock');
    else if (event.key === 'p') play('paper');
    else if (event.key === 's') play('scissors');
    else if (event.key === 'a') {
        autoPlay();
        toggleAutoPlayButton();
    } else if (event.key === 'Backspace') {
        if (confirm('Are you sure you want to reset score?')) resetScore();
    }
});

// Autoplay
function autoPlay() {
    if (!isAutoPlaying) {
        intervalId = setInterval(() => {
            const moves = ['rock', 'paper', 'scissors'];
            const playerMove = pickComputerMove();
            play(playerMove);
        }, 1000);
        isAutoPlaying = true;
    } else {
        clearInterval(intervalId);
        isAutoPlaying = false;
    }
}
