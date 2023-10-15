let gameStart = true;
let playerMove = "X";
const soundClick = new Audio("../src/Sounds/click-button-140881.mp3");
const successSound = new Audio("../src/Sounds/game-bonus-144751.mp3");
const drawSound = new Audio("../src/Sounds/wah-wah-sad-trombone-6347.mp3");
//wining moves
const winingMoves = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [2, 4, 6],
  [0, 4, 8],
];

//main root div
const root = document.getElementById("root");
root.classList.add("rootStyle");

// game title
const gameTitle = document.createElement("h1");
gameTitle.innerText = "TIC TAC TOE";
gameTitle.classList.add("gameTitle");
root.appendChild(gameTitle);

// winner anoucment
const winnerAnnoucment = document.createElement("p");
winnerAnnoucment.classList.add("winnerName");
winnerAnnoucment.innerText = "Welcome";
root.appendChild(winnerAnnoucment);

//game container
const gameContainer = document.createElement("div");
gameContainer.classList.add("gameContainerStyle");
root.appendChild(gameContainer);

//game reset button
const gameReset = document.createElement("div");
gameReset.innerHTML = '<i class="fa-solid fa-repeat"></i>';
gameReset.classList.add("resetButton");
root.appendChild(gameReset);

//check box
for (let row = 0; row < 3; row++) {
  for (let col = 0; col < 3; col++) {
    const cell = document.createElement("div");
    cell.classList.add("cellStyle");
    gameContainer.appendChild(cell);

    //calling click event
    cell.addEventListener("click", clickEventHandler);
  }
}

gameReset.addEventListener("click", () => {
  const cells = document.querySelectorAll(".cellStyle");
  cells.forEach((item) => {
    item.innerText = "";
  });
  gameStart = true;
  winnerAnnoucment.innerText = "Welcome";
});

function clickEventHandler(e) {
  soundClick.volume = 0.5;
  let cell = e.target;
  if (!gameStart || cell.innerText !== "") return; //direct return
  cell.innerText = playerMove;
  playerMove = playerMove === "X" ? "O" : "X";
  soundClick.play();

  //wining or lose chech
  const cells = document.querySelectorAll(".cellStyle");

  winingMoves.forEach((item) => {
    let [a, b, c] = item;
    if (
      cells[a].innerText !== "" &&
      cells[a].innerText === cells[b].innerText &&
      cells[b].innerText === cells[c].innerText
    ) {
      winnerAnnoucment.innerText = `Player ${cells[a].innerText} Win This Match `;
      successSound.play();
      gameStart = false;
    } else {
      drawCheaker(cells);
    }
  });
}

function drawCheaker(cell) {
  newCheckArray = [];
  for (let i of cell) {
    if (i.innerText !== "") {
      newCheckArray.push(i);
      if (newCheckArray.length === 9) {
        winnerAnnoucment.innerText = `Player Draw This Match `;
        drawSound.play();
      }
    }
  }
}
