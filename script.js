const colorInput = document.getElementById('colorInput');
const colorValue = document.getElementById('colorValue');

const savedColor = localStorage.getItem('backgroundColor');
if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    colorInput.value = savedColor;
    colorValue.textContent = `Current Color: ${savedColor}`;
}

colorInput.addEventListener('input', (event) => {
    const selectedColor = event.target.value;
    document.body.style.backgroundColor = selectedColor;
    colorValue.textContent = `Current Color: ${selectedColor}`;
    
    localStorage.setItem('backgroundColor', selectedColor);
});




 //code for stopwatch 


 
let startTime;
let updatedTime;
let difference = 0;
let tInterval;
let running = false;

const stopwatchDisplay = document.getElementById('stopwatch');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

function startTimer() {
    if (!running) {
        startTime = new Date().getTime() - difference; 
        tInterval = setInterval(updateTime, 1); 
        running = true;
    }
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((difference % 1000));

    stopwatchDisplay.innerHTML = 
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds) + "." +
        (milliseconds < 100 ? "0" + (milliseconds < 10 ? "0" + milliseconds : milliseconds) : milliseconds);
}

function pauseTimer() {
    clearInterval(tInterval);
    running = false;
}

function resetTimer() {
    clearInterval(tInterval);
    running = false;
    difference = 0;
    stopwatchDisplay.innerHTML = "00:00:00.000";
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

var result=confirm("ARE YOU READY TO ENTER");
console.log(result);

alert("SELECT THE COLOUR THAT YOU WANT AND USE THE STOPWATCH");