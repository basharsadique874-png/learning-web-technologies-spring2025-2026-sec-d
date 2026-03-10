let cells = document.querySelectorAll(".cell");
let statusText = document.getElementById("status");
let resetBtn = document.getElementById("resetBtn");

let board = ["","","","","","","","",""];
let currentPlayer = "X";
let gameRunning = true;

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

cells.forEach(cell => {
    cell.addEventListener("click", cellClick);
});

resetBtn.addEventListener("click", resetGame);

function cellClick(){
    let index = this.getAttribute("data-index");

    if(board[index] != "" || !gameRunning){
        return;
    }

    board[index] = currentPlayer;
    this.textContent = currentPlayer;

    checkWinner();

    if(gameRunning){
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusText.textContent = "Current Player: " + currentPlayer;
    }
}

function checkWinner(){

    for(let i=0;i<winPatterns.length;i++){
        let a = winPatterns[i][0];
        let b = winPatterns[i][1];
        let c = winPatterns[i][2];

        if(board[a] == "" || board[b] == "" || board[c] == ""){
            continue;
        }

        if(board[a] == board[b] && board[b] == board[c]){
            gameRunning = false;
            statusText.textContent = "Winner: " + currentPlayer;

            cells[a].classList.add("win");
            cells[b].classList.add("win");
            cells[c].classList.add("win");

            return;
        }
    }

    if(!board.includes("")){
        statusText.textContent = "It's a Draw!";
        gameRunning = false;
    }
}

function resetGame(){
    board = ["","","","","","","","",""];
    currentPlayer = "X";
    gameRunning = true;

    statusText.textContent = "Current Player: X";

    cells.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove("win");
    });
}