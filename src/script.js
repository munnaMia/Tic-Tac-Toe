let gameStart = true;
let playerMove = "X";

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

//game container
const gameContainer = document.createElement("div");
gameContainer.classList.add("gameContainerStyle");
root.appendChild(gameContainer);

//game reset button
const gameReset = document.createElement('div');
gameReset.innerHTML = '<i class="fa-solid fa-repeat"></i>'
gameReset.classList.add('resetButton')
root.appendChild(gameReset)

gameReset.addEventListener("click", ()=>{
})

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


function clickEventHandler(e){
  let cell = e.target;
  if (!gameStart || cell.innerText !== "") return;//direct return
  cell.innerText = playerMove;
  playerMove = playerMove === "X" ? "O" : "X";

  //wining or lose chech
  const cells = document.querySelectorAll(".cellStyle");
  winingMoves.forEach(item => {
    let [a, b, c] = item;
    if (
      cells[a].innerText !== "" &&
      cells[a].innerText === cells[b].innerText &&
      cells[b].innerText === cells[c].innerText
    ) {
      console.log(`${cells[a].innerText} win`);//winner name
      gameStart = false;
    }
  })
}