window.addEventListener('DOMContentLoaded', setup);

function setup() {
    document.getElementById("playGame").addEventListener("click", playGame);    
}

// Changes divs to display the game content
function playGame() {
    document.getElementById("playGame").removeEventListener("click", playGame);
    // document.getElementById("closeGame").removeEventListener("click", closeGame);

    document.getElementById("firstDiv").innerHTML = /*html*/ `
    <div id="navbar">        
        <span><button id="mainMenuBtn" class="box">Main menu</button></span> <br>
        <span data-bs-toggle="modal" data-bs-target="#rulesModal" class="rules"><button
        class="box">Rules</button></span>
    </div>    
    <div id="gamePageHeading"><h3 class="display-4">Who's getting the next round?</h3></div>
    <div class="box">
        <span>Your Wins: <span id="playerScore">0</span></span> <br>
        <span>Your mate's wins: <span id="computerScore">0</span></span> <br>
        <span>Draws: <span id="drawScore">0</span></span>
    </div>`;

    document.getElementById("secondDiv").innerHTML = /*html*/ `
    <div id="computerSection">
        <h3 class="display-4">Your mate's choice</h3>
        <div id="computerChoice"></div>
        <div id="resultDisplay"></div>
    </div>`;

    document.getElementById("thirdDiv").innerHTML = /*html*/ `
    <div id="playerSection">
        <div id="rock"><img src="assets/images/rock-hand-2.webp" /></div>
        <div id="paper"><img src="assets/images/paper-hand-2.webp"></div>
        <div id="scissors"><img src="assets/images/scissors-hand-2.webp"></div>
    </div>`;
    addEventListenersToGamePage();
};

// Event listeners for player's choice
function addEventListenersToGamePage() {
    document.getElementById("rock").addEventListener("click", () => playerHasChosen("Rock"));
    document.getElementById("paper").addEventListener("click", () => playerHasChosen("Paper"));
    document.getElementById("scissors").addEventListener("click", () => playerHasChosen("Scissors"));
    document.getElementById("mainMenuBtn").addEventListener("click", mainMenu);
}

//create a function for computer choice
function computerChoice() {
    const options = ["Rock", "Paper", "Scissors"];   
    const randomChoice = Math.floor(Math.random() * options.length);
    return options[randomChoice];
}


//checking the results of the game
function didPlayerWin(playerChoice, computerChoice) {    
    if (playerChoice === "Rock" && computerChoice === "Scissors") {
        return true;
      }else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        return true;
      }  else if (playerChoice === "Paper" && computerChoice === "Rock") {
        return true;
      } else {
        return false;
      }
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

function displayResults(result) {
    const playerScoreDisplay = document.getElementById("playerScore");
    const computerScoreDisplay = document.getElementById("computerScore");
    const drawScoreDisplay = document.getElementById("drawScore");

    roundResults(result)
    playerScoreDisplay.innerText = playerScore;
    computerScoreDisplay.innerText = computerScore;
    drawScoreDisplay.innerText = drawScore;
}

function roundResults(result) {
  if (result === "player"){
    playerScore++;    
  } else if (result === "computer") {
    computerScore++;
  } else {
    drawScore++;
  }
}

// Main menu button

function mainMenu() {
    document.getElementById("firstDiv").innerHTML = /*html*/ `
    <div id="heading" class="heading">
        <h1 class="display-1">Who's getting the next round?</h1>
        <h2 class="display-4">Rock, Paper, Scissors game</h2>
    </div>`;
    document.getElementById("secondDiv").innerHTML = /*html*/ `
    <div id="enterName">
        <h3 class="display-5">Who's playing?</h3>
        <input type="text" id="playerName" placeholder="Enter player name" required>
    </div>`;
    document.getElementById("thirdDiv").innerHTML = /*html*/ `
    <div id="menu">
        <button type="button" class="btn btn-primary btn-lg" id="playGame">Play
            game</button> <br>                
        <button type="button" class="btn btn-primary btn-lg" id="rules" data-bs-toggle="modal"
        data-bs-target="#rulesModal">Rules</button><br>
        <button type="button" class="btn btn-primary btn-lg" id="closeGame">I've had enough, TAXI!</button>
    </div>`;
}