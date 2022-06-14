const board = document.querySelectorAll(".cell");
const cells = document.querySelectorAll(".cell");
const restartButton = document.querySelector(".restart")
const gameStatus = document.querySelector(".gameStatus")

let gameOver = false;
const gameTurn = true;
let currentMark = "x"

function oTurn() {
  gameStatus.textContent = "o's turn"
}

function xTurn() {
  gameStatus.textContent = "x's turn"
}

restartButton.addEventListener("click", () => {
  for (let i = 0; i <= cells.length; i++) {
    cells[i].textContent = ""
    cells[i].setAttribute("style", "color:black")
    currentMark = "x"
    xTurn()
    gameOver = false
  }
})

cells.forEach(cell => {
  cell.addEventListener("click", () => {
    if (cell.textContent == "" && gameOver !== true) {
      cell.textContent = currentMark;
      
      if (currentMark == "x") {
        currentMark = "o"
        oTurn()
      }
      else if (currentMark == "o") {
        currentMark = "x"
        xTurn()
      }
      checkGame();
      }
  })
})


function checkGame () {

  //HORIZONTAL CHECK
  if (cells[0].textContent == "x" && cells[1].textContent == "x" && cells[2].textContent == "x") {
    winningColors(0,1,2)
    xWin()
  }
  if (cells[3].textContent == "x" && cells[4].textContent == "x" && cells[5].textContent == "x") {
    winningColors(3,4,5)
    xWin()
  }
  if (cells[6].textContent == "x" && cells[7].textContent == "x" && cells[8].textContent == "x") {
    winningColors(0,1,2)
    xWin()
  }


  //VERTICAL CHECK
  if (cells[0].textContent == "x" && cells[3].textContent == "x" && cells[6].textContent == "x") {
    winningColors(0,3,6)
    xWin()
  }
  if (cells[1].textContent == "x" && cells[4].textContent == "x" && cells[7].textContent == "x") {
    winningColors(1,4,7)
    xWin()
  }
  if (cells[2].textContent == "x" && cells[5].textContent == "x" && cells[8].textContent == "x") {
    winningColors(2,5,8)
    xWin()
  }

  //DIAGONAL CHECK
  if (cells[0].textContent == "x" && cells[4].textContent == "x" && cells[8].textContent == "x") {
    winningColors(0,4,8)
    xWin()
  }
  if (cells[2].textContent == "x" && cells[4].textContent == "x" && cells[6].textContent == "x") {
    winningColors(2,4,6)
    xWin()
  }

  if (cells[0].textContent == "x" && cells[1].textContent == "o" && cells[2].textContent == "o") {
    winningColors(0,1,2)
    oWin()
  }
  if (cells[3].textContent == "o" && cells[4].textContent == "o" && cells[5].textContent == "o") {
    winningColors(3,4,5)
    oWin()
  }
  if (cells[6].textContent == "o" && cells[7].textContent == "o" && cells[8].textContent == "o") {
    winningColors(6,7,8)
    oWin()
  }
  
  //VERTICAL CHECK
  if (cells[0].textContent == "o" && cells[3].textContent == "o" && cells[6].textContent == "o") {
    winningColors(0,3,6)
    oWin()
  }
  if (cells[1].textContent == "o" && cells[4].textContent == "o" && cells[7].textContent == "o") {
    winningColors(2,4,7)
    oWin()
  }
  if (cells[2].textContent == "o" && cells[5].textContent == "o" && cells[8].textContent == "o") {
    winningColors(2,5,8)
    oWin()
  }
  
  //DIAGONAL CHECK
  if (cells[0].textContent == "o" && cells[4].textContent == "o" && cells[8].textContent == "o") {
    winningColors(0,4,8)
    oWin()
  }
  if (cells[2].textContent == "o" && cells[4].textContent == "o" && cells[6].textContent == "o") {
    winningColors(2,4,6)
    oWin()
  }

}

function winningColors(a,b,c) {
  cells[a].setAttribute("style", "color:green")
  cells[b].setAttribute("style", "color:green")
  cells[c].setAttribute("style", "color:green")
}


function xWin() {
  gameStatus.textContent = "x wins the game"
  gameOver = true
}

function oWin() {
  gameStatus.textContent = "o wins the game"
  gameOver = true
}