// history.js

export function saveHistory(result) {
    const history = JSON.parse(localStorage.getItem('history')) || [];
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    history.push({ result, time });
    localStorage.setItem('history', JSON.stringify(history));
}

export function loadHistory() {
    const history = JSON.parse(localStorage.getItem('history')) || [];
    const tbody = document.querySelector('.js-history-list');
    tbody.innerHTML = '';

    history.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${entry.result}</td><td>${entry.time}</td>`;
        tbody.appendChild(row);
    });
}

export function clearHistory() {
    localStorage.removeItem('history');
    loadHistory();
}
