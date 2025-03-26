window.addEventListener('DOMContentLoaded', setup);

function setup() {
    document.getElementById("playGame").addEventListener("click", playGame);
    // document.getElementById("numberOfGames").removeEventListener("change", updateNumberOfGames);
}

// Changes divs to display the game content
function playGame() {
    document.getElementById("playGame").removeEventListener("click", playGame);
    document.getElementById("closeGame").removeEventListener("click", closeGame);

    document.getElementById("firstDiv").innerHTML = /*html*/ `
    <div id="navbar">        
        <span><button class="box">Main menu</button></span> <br>
        <span data-bs-toggle="modal" data-bs-target="#rulesModal" class="rules"><button
        class="box">Rules</button></span>
    </div>
    <div id="gamePageHeading"><h3 class="display-4">Who's getting the next round?</h3></div>
            <div class="box"><span>Number of Games: <span id="numOfGames">0</span></span> <br>
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
};


function computerChoice() {
    const options = ["rock", "paper", "scissors"];   
    const randomChoice = Math.floor(Math.random() *options.length);
    return options[randomChoice];
}

function didPlayerWin(player, computer) {
    if (player === "Rock" && computer === "Scissors") {
        return true;
      }else if (player === "Scissors" && computer === "Paper") {
        return true;
      }  else if (player === "Paper" && computer === "Rock") {
        return true;
      }else if (player === computer){
        return false;
      } else {
        return false;
      }
}

function roundResults(playerChoice) {
    const computerResult = getRandomComputerResult();
  if (hasPlayerWonTheRound === true){
    playerScore++
    return "You win!";
  } else if (hasPlayerWonTheRound === false) {
    computerScore++
    return "Your mate wins!";
  } else {
    drawScore++
    return "DRAW! You both chose " + playerChoice;
  }
}
