window.addEventListener('DOMContentLoaded', setup);

function setup() {
    document.getElementById("playGame").addEventListener("click", playGame);
    document.getElementById("numberOfGames").removeEventListener("change", updateNumberOfGames);
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

//Game logic
function game() {
    let playerScore = 0;
    let computerScore = 0;
    let drawScore = 0;
    let moves = 0;


    //game function
    function gamePlay() {
        //grabbing the elements
        const rock = document.getElementById("rock");
        const paper = document.getElementById("paper");
        const scissors = document.getElementById("scissors");
        const playerOptions = [rock, paper, scissors];
        const computerOptions = ["rock", "paper", "scissors"];
        const playerScore = document.getElementById("playerScore");
        const computerScore = document.getElementById("computerScore");
        const drawScore = document.getElementById("drawScore");

        //player choice
        playerOptions.forEach((option) => {
            option.addEventListener("click", function () {
                //random computer choice
                const computerChoice = computerOptions[Math.floor(Math.random() * 3)];
                const playerChoice = option.id;
                const result = document.getElementById("resultDisplay");
                const computerChoiceDisplay = document.getElementById("computerChoice");

                computerChoiceDisplay.innerHTML = `<img src="assets/images/${computerChoice}-hand-2.webp">`;

                if (playerChoice === computerChoice) {
                    result.innerHTML = "It's a draw!";
                    drawScore.textContent = parseInt(drawScore.textContent) + 1;
                } else if (playerChoice === "rock" && computerChoice === "scissors") {
                    result.innerHTML = "You win!";
                    playerScore.textContent = parseInt(playerScore.textContent) + 1;
                } else if (playerChoice === "paper" && computerChoice === "rock") {
                    result.innerHTML = "You win!";
                    playerScore.textContent = parseInt(playerScore.textContent) + 1;
                } else if (playerChoice === "scissors" && computerChoice === "paper") {
                    result.innerHTML = "You win!";
                    playerScore.textContent = parseInt(playerScore.textContent) + 1;
                } else {
                    result.innerHTML = "You lose!";
                    computerScore.textContent = parseInt(computerScore.textContent) + 1;
                }                
            });
        });

    }
}