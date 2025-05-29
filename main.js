var incrementations = 0;
var increments = 1;
var autoIncrementors = 0;
var autoIncrements = 1;
var incrementButton;
var buyIncrementsButton;
var incrementationsDisplay;
var incrementsDisplay;
var buyAutoIncrementorButton;
var autoIncrementorDisplay;
var buyAutoIncrementsButton;
var autoIncrementsDisplay;
var coinflipAmount;
var coinflipResult;
var coinflipButton;

document.addEventListener("DOMContentLoaded", () => {
    incrementButton = document.getElementById("increment");
    buyIncrementsButton = document.getElementById("buy-increments");
    incrementationsDisplay = document.getElementById("incrementations");
    incrementsDisplay = document.getElementById("increments");
    buyAutoIncrementorButton = document.getElementById("buy-auto-incrementor");
    autoIncrementorDisplay = document.getElementById("auto-incrementors");
    buyAutoIncrementsButton = document.getElementById("buy-auto-increments");
    autoIncrementsDisplay = document.getElementById("auto-increments");
    coinflipAmount = document.getElementById("coinflip-amount");
    coinflipResult = document.getElementById("coinflip-result");
    coinflipButton = document.getElementById("coinflip");

    incrementButton.addEventListener("click", () => { increment(increments); });
    buyIncrementsButton.addEventListener("click", () => { buyIncrements(); });
    buyAutoIncrementorButton.addEventListener("click", () => { buyAutoIncrementor() });
    buyAutoIncrementsButton.addEventListener("click", () => { buyAutoIncrements(); });
    coinflipButton.addEventListener("click", () => { runCoinflip(); });

    setInterval(() => { timeStep(); }, 1000);
});

function timeStep() {
    for (var i = 0; i < autoIncrementors; i++) {
        increment(autoIncrements);
    }
}

function runCoinflip() {
    if (coinflipAmount.value > incrementations) {
        alert("NOT ENOUGH INCREMENTATIONS!");
    } else {
        incrementations -= coinflipAmount.value;
        if (Math.random() <= 0.5) {
            incrementations += coinflipAmount.value * 2;
            coinflipResult.textContent = "WIN";
            updateDisplays();
        } else {
            coinflipResult.textContent = "LOSS";
            updateDisplays();
        }
    }
}

function increment(num) {
    incrementations += num;
    updateDisplays();
}

function buyIncrements() {
    if (incrementations < 10) {
        alert("NOT ENOUGH INCREMENTATIONS!");
    } else {
        incrementations -= 10;
        increments += 1;
        updateDisplays();
    }
}

function buyAutoIncrementor() {
    if (incrementations < 100) {
        alert("NOT ENOUGH INCREMENTATIONS!");
    } else {
        incrementations -= 100;
        autoIncrementors += 1;
        updateDisplays();
    }
}

function buyAutoIncrements() {
    if (incrementations < 20) {
        alert("NOT ENOUGH INCREMENTATIONS!");
    } else {
        incrementations -= 20;
        autoIncrements += 1;
        updateDisplays();
    }
}

function updateDisplays() {
    incrementationsDisplay.textContent = incrementations;
    incrementsDisplay.textContent = increments;
    autoIncrementorDisplay.textContent = autoIncrementors;
    autoIncrementsDisplay.textContent = autoIncrements;
}