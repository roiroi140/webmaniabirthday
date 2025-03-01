let timer;
let elapsedTime = 0;
let running = false;

function updateDisplay() {
    let milliseconds = elapsedTime % 1000;
    let seconds = Math.floor(elapsedTime / 1000) % 60;
    let minutes = Math.floor(elapsedTime / (1000 * 60)) % 60;
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));

    document.getElementById('display').textContent =
        `${String(hours).padStart(2, '0')}:` +
        `${String(minutes).padStart(2, '0')}:` +
        `${String(seconds).padStart(2, '0')}.` +
        `${String(milliseconds).padStart(3, '0')}`;
}

document.getElementById('startButton').addEventListener('click', function () {
    if (!running) {
        running = true;
        let startTime = Date.now() - elapsedTime;

        timer = setInterval(function () {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 1); // 1ミリ秒ごとに更新
    }
});

document.getElementById('stopButton').addEventListener('click', function () {
    if (running) {
        clearInterval(timer);
        running = false;
        document.getElementById('result').innerHTML = `作業時間: ${elapsedTime / 1000}`
        }
});

document.getElementById('resetButton').addEventListener('click', function () {
    clearInterval(timer);
    running = false;
    elapsedTime = 0;
    updateDisplay();
});



updateDisplay();
