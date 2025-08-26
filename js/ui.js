// ui.js
export function updateScoreBoard(score) {
    document.getElementById('scoreDisplay').textContent =
        `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

export function showResult(result, computerMove, playerMove) {
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

export function toggleAutoPlayButton() {
    const autoPlayElement = document.querySelector('.js-auto-play');
    autoPlayElement.textContent =
        autoPlayElement.textContent === 'Auto Play' ? 'Stop Auto Play' : 'Auto Play';
}
