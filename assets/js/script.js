/* jshint esversion: 6 */

//Sound variables
let isMuted = true; // Mute sounds
let backgroundNoise = new Audio("assets/sounds/crowded-pub.mp3");
backgroundNoise.volume = 0.4; // Set volume to 40%
backgroundNoise.loop = true; // Loop the background noise
let winnerNoise = new Audio("assets/sounds/winner-noise.mp3");
let loserNoise = new Audio("assets/sounds/loser-noise.mp3");
let drawNoise = new Audio("assets/sounds/draw-noise.mp3");


//Function to toggle the noises in the game
function playPause() {

    isMuted = !isMuted;

    if (isMuted) {
        backgroundNoise.pause();
        backgroundNoise.currentTime = 0;
        winnerNoise.pause();
        winnerNoise.currentTime = 0;
        loserNoise.pause();
        loserNoise.currentTime = 0;
        drawNoise.pause();
        drawNoise.currentTime = 0;
        document.getElementById("playSound").innerHTML = /*html*/ `<p>Sound effects on</p>`;
    } else {
        backgroundNoise.play();
        document.getElementById("playSound").innerHTML = /*html*/ `<p>Sound effects off</p>`;
    }
}
function playWinnerSound() {
    if (!isMuted) winnerNoise.play();
}

function playLoserSound() {
    if (!isMuted) loserNoise.play();
}

function drawSound() {
    if (!isMuted) drawNoise.play();
}

function backgroundSound() {
    if (!isMuted) backgroundNoise.play();
}

//Background noise
backgroundSound();


function setup() {
    // Adding event listeners to the buttons    
    document.getElementById("playSound").addEventListener("click", playPause);
    document.getElementById("playGame").addEventListener("click", playGame);
    document.getElementById("numberOfGames").addEventListener("click", numOfGamesSlider);
    document.getElementById("reset").addEventListener("click", resetSettings);
}

function resetSettings() {
    localStorage.clear();
    // Reset input fields and sliders
    document.getElementById("playerName").value = ""; // Replace with the actual ID of the name input
    document.getElementById("numOfGamesRange").value = winningScore; // Replace with the actual ID and default value
}

function playerName() {
    // Getting the player name from the input field and storing it in local storage
    let playerNameInput = document.getElementById("playerName");

    let savedName = localStorage.getItem("playerName");

    if (savedName) {
        playerNameInput.value = savedName;
    }

    playerNameInput.addEventListener("input", function () {
        let name = playerNameInput.value.trim();
        // Checking if the player name is empty and give default name
        if (name === "") {
            name = "Secret pub warrior";
        }
        localStorage.setItem("playerName", name);
        console.log("Player name saved:", name);
    });
}
playerName(); // Call the function to set up player name input
//Number of games slider 
function numOfGamesSlider() {
    const rangeSlider = document.querySelector(".form-range");
    const sliderDisplay = document.getElementById("displayNumberForSlider");

    sliderDisplay.innerText = rangeSlider.value;
    localStorage.setItem("numberOfGames", rangeSlider.value);
}

//Getting the number of games selected get the score needed to win 
function getNumberOfGames() {
    let selectedGames = localStorage.getItem("numberOfGames");
    // Check if wantedGames is null or not set, and assign a default value if necessary
    if (selectedGames === null) {
        selectedGames = winningScore; // Default value if not set
    } else {
        selectedGames = parseInt(selectedGames);
    }
    return selectedGames;
}

// Changes divs to display the game content
function playGame() {
    // Stop noise from winner/loser/draw pages
    winnerNoise.pause();
    loserNoise.pause();
    drawNoise.pause();

    document.getElementById("playGame").removeEventListener("click", playGame);

    document.getElementById("topDiv").innerHTML = /*html*/ `
    <div id="navbar">               
        <span data-bs-toggle="modal" data-bs-target="#rulesModal" id="rulesGamePage" >
        <button class="gamePageNavBtns">Rules</button>
        </span>
        <span>
        <button id="mainMenuBtn" class="gamePageNavBtns quit">Quit</button>
        </span>
    </div>    
    
    <div id="scoreBoard">
        <span>Your Wins: <span id="playerScore">0</span></span> <br>
        <span>Your mate's wins: <span id="computerScore">0</span></span> <br>
        <span>Draws: <span id="drawScore">0</span></span>
    </div>`;

    document.getElementById("middleDiv").innerHTML = /*html*/ `
    <div id="computerSection">
        <h3 class="display-4">Your mate's choice</h3>
        <div id="computerChoice"></div>
        <div id="resultDisplay"></div>
    </div>`;

    document.getElementById("bottomDiv").innerHTML = /*html*/ `
    <div id="playerSection">
        <div id="rock"><img src="assets/images/rock-hand-2.webp" /></div>
        <div id="paper"><img src="assets/images/paper-hand-2.webp"></div>
        <div id="scissors"><img src="assets/images/scissors-hand-2.webp"></div>
    </div>`;
    addEventListenersToGamePage();
    reset();

    // Getting main menu button
    document.getElementById("mainMenuBtn").addEventListener("click", mainMenu);
}

// Event listeners for player's choice
function addEventListenersToGamePage() {
    document.getElementById("rock").addEventListener("click", () => playerHasChosen("Rock"));
    document.getElementById("paper").addEventListener("click", () => playerHasChosen("Paper"));
    document.getElementById("scissors").addEventListener("click", () => playerHasChosen("Scissors"));

}

//create a function for computer choice
function computerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * options.length);
    return options[randomChoice];
}


//checking the results of the game
function didPlayerWin(playerChoice, computerChoice) {
    const winConditions = [
        ["Rock", "Scissors"],
        ["Scissors", "Paper"],
        ["Paper", "Rock"]
    ];

    for (let [player, computer] of winConditions) {
        if (playerChoice === player && computerChoice === computer) {
            return true;
        }
    }
    return false;
}


//displaying the results of the game
function playerHasChosen(playerChoice) {
    const computer = computerChoice();
    const resultDisplay = document.getElementById("resultDisplay");
    const computerChoiceDisplay = document.getElementById("computerChoice");

    computerChoiceDisplay.innerHTML = `<img src="assets/images/${computer.toLowerCase()}-hand-2.webp" />`;
    if (didPlayerWin(playerChoice, computer) === true) {
        resultDisplay.innerHTML = "You win!";
        displayResults("player");
    } else {
        if (playerChoice === computer) {
            resultDisplay.innerHTML = "DRAW! You both chose " + playerChoice;
            displayResults("draw");
        } else {
            resultDisplay.innerHTML = "Your mate wins!";
            displayResults("computer");
        }
    }
}

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
const winningScore = 3;

function displayResults(result) {
    const playerScoreDisplay = document.getElementById("playerScore");
    const computerScoreDisplay = document.getElementById("computerScore");
    const drawScoreDisplay = document.getElementById("drawScore");

    roundResults(result);
    playerScoreDisplay.innerText = playerScore;
    computerScoreDisplay.innerText = computerScore;
    drawScoreDisplay.innerText = drawScore;
}

function roundResults(result) {
    if (result === "player") {
        playerScore++;
    } else if (result === "computer") {
        computerScore++;
    } else {
        drawScore++;
    }
    playerWins();
    computerWins();
    draw();
}



//Player/Computer/Draw wins pages
function playerWins() {
    if (playerScore === getNumberOfGames()) {
        playerWinPage();
    }
}

function computerWins() {
    if (computerScore === getNumberOfGames()) {
        computerWinPage();
    }
}

function draw() {
    if (drawScore === getNumberOfGames()) {
        drawPage();
    }
}

function playerWinPage() {
    winnerNoise.currentTime = 0;
    playWinnerSound();
    let name = localStorage.getItem("playerName") || "Secret pub warrior";

    // Displaying the result page for the player win
    const resultPageHeading = /*html*/ `
    <div>
        <div class="box resultPageHeading">
            <h1>TELL YOUR MATE WHAT
            <br> YOU WANT FROM THE BAR!</h1>
        </div>
    </div>`;
    document.getElementById("topDiv").innerHTML = resultPageHeading;

    const winnerText = /*html*/ `
    <div class="box" id="resultPara">
                <p>Ladies and gentlemen, we have a champion! Against all odds, defying the laws of probability (and
                    sobriety), <strong>${name}</strong> has emerged victorious in the legendary battle of Pub Rock, Paper, Scissors! With
                    the cunning of a fox, the reflexes of a caffeinated squirrel, and the sheer luck of someone who
                    always finds money in old jeans, you have crushed your opponent’s spirits like a well-placed rock
                    smashing flimsy scissors. Bask in the glory, oh mighty hand-gesture warrior! Your prize? Eternal
                    bragging rights and a free round of drinks.🍻👏</p>
            </div>`;
    document.getElementById("middleDiv").innerHTML = winnerText;
    document.getElementById("bottomDiv").innerHTML = /*html*/ `
    <div id="menu">                
        <button type="button" class="btn btn-primary btn-lg playAgain" id="playGame">Play again</button> <br>
        <button type="button" class="btn btn-primary btn-lg mainMenu" id="mainMenuBtn">Go outside for "fresh air" (Main Menu)</button> <br>        
    </div>`;
    document.getElementById("playGame").addEventListener("click", playGame);
    document.getElementById("mainMenuBtn").addEventListener("click", mainMenu);

}

function computerWinPage() {
    loserNoise.currentTime = 0;
    playLoserSound();
    // Getting the player name from local storage or using a default name
    let name = localStorage.getItem("playerName") || "Secret pub warrior";

    // Displaying the result page for the computer win
    document.getElementById("topDiv").innerHTML = /*html*/ `
    <div>
                <div class="box resultPageHeading">
                    <h1>DIG DEEP AND
                        <br> GET TO THE BAR</h1>
                </div>
            </div>
    </div>`;
    document.getElementById("middleDiv").innerHTML = /*html*/ `
    <div class="box" id="resultPara">
                <p>Oh no, my dear defeated warrior—your rock was rolled, your paper was shredded, and your scissors got
                    safety-proofed. You came, you threw, you… well, you tried. But fate (and probably your opponent’s
                    shady mind games) had other plans. Don’t worry, though—losing at Pub Rock, Paper, Scissors just
                    means you get the honor of buying the next round! So hold your head high <strong>${name}</strong>, march to the bar with
                    dignity, and pretend this was all part of your master plan. 🍻😂</p>
            </div>`;
    document.getElementById("bottomDiv").innerHTML = /*html*/ `
    <div id="menu">                
        <button type="button" class="btn btn-primary btn-lg playAgain" id="playGame">Play again</button> <br>
        <button type="button" class="btn btn-primary btn-lg mainMenu" id="mainMenuBtn">Go outside for "fresh air" (Main Menu)</button> <br>       
    </div>`;
    document.getElementById("playGame").addEventListener("click", playGame);
    document.getElementById("mainMenuBtn").addEventListener("click", mainMenu);

}

function drawPage() {
    drawNoise.currentTime = 0;
    drawSound();
    // Getting the player name from local storage or using a default name
    let name = localStorage.getItem("playerName") || "Secret pub warrior";

    // Displaying the result page for the draw
    document.getElementById("topDiv").innerHTML = /*html*/ `
    <div>
                <div class="box resultPageHeading">
                    <h1>IT'S A
                        <br> DRAW!</h1>
                </div>
            </div>
    </div>`;
    document.getElementById("middleDiv").innerHTML = /*html*/ `
    <div class="box" id="resultPara">
                <p>You can chose to buy your own pints or give your luck another chance <strong>${name}</strong>!!</p>
            </div>`;
    document.getElementById("bottomDiv").innerHTML = /*html*/ `
    <div id="menu">                
        <button type="button" class="btn btn-primary btn-lg playAgain" id="playGame">Play again</button> <br>
        <button type="button" class="btn btn-primary btn-lg mainMenu" id="mainMenuBtn">Go outside for "fresh air" (Main Menu)</button> <br>        
    </div>`;
    document.getElementById("playGame").addEventListener("click", playGame);
    document.getElementById("mainMenuBtn").addEventListener("click", mainMenu);

}

function updateScoreDisplay() {
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
    document.getElementById("drawScore").textContent = drawScore;
}


function reset() {
    playerScore = 0;
    computerScore = 0;
    drawScore = 0;
    updateScoreDisplay();
}

// Store original content when the page loads
let originalContent = document.getElementById("mainMenu").innerHTML;

function mainMenu() {
    document.getElementById("mainMenu").innerHTML = originalContent;
    setup();
    winnerNoise.pause();
    winnerNoise.currentTime = 0;
    loserNoise.pause();
    loserNoise.currentTime = 0;
    drawNoise.pause();
    draw.currentTime = 0;
    playerName(); // Call the function to set up player name input
}

window.addEventListener('DOMContentLoaded', setup);