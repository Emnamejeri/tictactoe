let userOnePiece = "X";
let userTwoPiece = "O";
let currentPlayer = "userOne";
const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const squareElements = document.querySelectorAll("#square");
squareElements.forEach((squareElement, index) => {
  squareElement.addEventListener("click", function () {
    const dataToAdd = currentPlayer === "userOne" ? userOnePiece : userTwoPiece;
    squareElement.value = dataToAdd; // Use textContent to set the value
    board[Math.floor(index / 4)][index % 4] = dataToAdd; // Update the board array
    if (currentPlayer === "userOne") {
      squareElement.style.backgroundColor = "yellow";
    } else {
      squareElement.style.backgroundColor = "pink";
    }
    squareElement.disabled = true; // Disable click after selection
    currentPlayer = currentPlayer === "userOne" ? "userTwo" : "userOne";
    GameRules();
  });
});

document.querySelector("Button").addEventListener("click", function () {
  location.reload();
});

// winning diagonally
function winningDiagonally(board, userOnePiece, userTwoPiece) {
  if (
    (userOnePiece === board[0][0] &&
      userOnePiece === board[1][1] &&
      userOnePiece === board[2][2] &&
      userOnePiece === board[3][3]) ||
    (userTwoPiece === board[0][0] &&
      userTwoPiece === board[1][1] &&
      userTwoPiece === board[2][2] &&
      userTwoPiece === board[3][3])
  ) {
    document.getElementById("gameWinner").innerHTML =
      "Player " + (currentPlayer === "userOne" ? "Two" : "One");
  }
}

// winning vertically
function winningVertically(board, userOnePiece, userTwoPiece) {
  for (let col = 0; col < 4; col++) {
    if (
      (userOnePiece === board[0][col] &&
        userOnePiece === board[1][col] &&
        userOnePiece === board[2][col] &&
        userOnePiece === board[3][col]) ||
      (userTwoPiece === board[0][col] &&
        userTwoPiece === board[1][col] &&
        userTwoPiece === board[2][col] &&
        userTwoPiece === board[3][col])
    ) {
      document.getElementById("gameWinner").innerHTML =
        "Player " + (currentPlayer === "userOne" ? "Two" : "One");
    }
  }
}

// winning horizontally
function winninghorizontally(board, userOnePiece, userTwoPiece) {
  for (let row = 0; row < 4; row++) {
    if (
      (userOnePiece === board[row][0] &&
        userOnePiece === board[row][1] &&
        userOnePiece === board[row][2] &&
        userOnePiece === board[row][3]) ||
      (userTwoPiece === board[row][0] &&
        userTwoPiece === board[row][1] &&
        userTwoPiece === board[row][2] &&
        userTwoPiece === board[row][3])
    ) {
      document.getElementById("gameWinner").innerHTML =
        "Player " + (currentPlayer === "userOne" ? "Two" : "One");
    }
  }
}
// a draw
function theDraw() {}

function GameRules() {
  winningDiagonally(board, userOnePiece, userTwoPiece);
  winningVertically(board, userOnePiece, userTwoPiece);
  winninghorizontally(board, userOnePiece, userTwoPiece);
  theDraw(board, userOnePiece, userTwoPiece);
}