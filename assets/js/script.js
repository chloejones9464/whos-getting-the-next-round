document.addEventListener('DOMContentLoaded', setup);


function setup() {
    document.getElementById("playGame").addEventListener("click", playGame);
    /*document.getElementById("numberOfGames").addEventListener("change", updateNumberOfGames);
        document.getElementById("closeGame").addEventListener("click", closeGame); */
}

function playGame() {
    /*document.getElementById("playGame").removeEventListener("click", playGame); 
     document.getElementById("numberOfGames").removeEventListener("change", updateNumberOfGames);
     document.getElementById("closeGame").removeEventListener("click", closeGame); */

    document.getElementById("gamePage").innerHTML =
        /* html */
        `
        <!--Navbar-->
    <div id="navbar">        
    <span class="mainMenu"><button class="box">Main menu</button></span> <br>
    <span data-bs-toggle="modal" data-bs-target="#rulesModal" class="rules"><button
            class="box">Rules</button></span>
</div>
<!--Main content-->
<div class="container" id="gamePage">        
    <div id="firstDiv">
        <div id="gamePageHeading"><h3 class="display-4">Who's getting the next round?</h3></div>
        <div class="box" id="scores">
            <span>Your Wins: <span id="playerScore">0</span></span> <br>
            <span>Your mate's wins: <span id="computerScore">0</span></span> <br>
            <span>Draws: <span id="drawScore">0</span></span>
        </div>
    </div>
    <div id="secondDiv">
        <div id="computerSection">
            <h3 class="display-4">Your mate's choice</h3>
            <div id="computerChoice"></div>
            <div id="resultDisplay"></div>
        </div>
    </div>
    <div id="thirdDiv">
        <div id="menu">
            <div id="rock"><img src="assets/images/rock-hand-2.webp" /></div>
            <div id="paper"><img src="assets/images/paper-hand-2.webp"></div>
            <div id="scissors"><img src="assets/images/scissors-hand-2.webp"></div>

        </div>
    </div>
</div>

<!--Rules Modal -->
<div class="modal fade" id="rulesModal" tabindex="-1" aria-labelledby="rules" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-3" id="rulesModalLabel">Rules</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

                <h4>Rock, Paper, Scissors – Pint Rules Edition 🍻</h4>
                <hr>
                <p>
                    <strong>Standard Rules Apply</strong> – Rock beats Scissors, Scissors beats Paper, Paper beats
                    Rock. <br>
                    <strong>Loser Buys the Next Round</strong> – Whoever loses the match has to buy the next pint.
                    <br>
                    <strong>Tie? Play Again!</strong> – If it's a draw, go again until there’s a clear loser. <br>
                    <strong>No Backing Out</strong> – Once the game starts, the pint tab is on the line. <br>
                </p>
                <hr>
                Drink responsibly, and may the best pint-buyer win! 🍻

            </div>
            <div class="modal-footer">
                <button id="close" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

<!--Bootstrap-->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
</script>
`;


}