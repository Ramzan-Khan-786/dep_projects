console.log("Welcome to Tic Tac Toe");
const music = new Audio("music.mp3");
const audioTurn = new Audio("ting.wav");
const gameOverSound = new Audio("game-over.mp3");

let turn = "X";
let isGameOver = false;
// image box when start
document.querySelector(".imgbox img").style.width = "0px";
// Function to change turn
const changeTurn = () => (turn === "X" ? "O" : "X");

// Function to check for a win
const checkWin = () => {
  const boxtext = document.getElementsByClassName('boxtext');
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  wins.some((e) => {
    if (boxtext[e[0]].innerText !== "" &&
        boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
        boxtext[e[1]].innerText === boxtext[e[2]].innerText) {
      document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
      isGameOver = true;
      gameOverSound.play();
      document.querySelector('.imgbox img').style.width = "156px";
      return true;
    }
    return false;
  });
};

// Game logic
document.querySelectorAll(".box").forEach((element) => {
  const boxtext = element.querySelector('.boxtext');
  element.addEventListener('click', () => {
    if (boxtext && boxtext.innerText === '' && !isGameOver) {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!isGameOver) {
        document.querySelector(".info").innerText = "Turn for " + turn;
      }
    }
  });
});

// Reset button
document.getElementById('reset').addEventListener('click', () => {
  document.querySelectorAll('.boxtext').forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isGameOver = false;
  document.querySelector(".info").innerText = "Turn for " + turn;
  document.querySelector('.imgbox img').style.width = "0px";
});
