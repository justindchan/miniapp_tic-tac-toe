// track current player
var currentPlayer = prompt("Who is The Current Player X=1 O=2")
// console.log(currentPlayer) // 1 or 2
// var currentPlayer = 1;

// construct board
var board = [];
board[0] = [];
board[1] = [];
board[2] = [];

for (let i = 0; i <= 2; i++) {
  for (let j =0; j <= 2; j++) {
    board[i][j] = 0;
  }
}

var table = document.getElementById("tictactoe1");
table.addEventListener("click", handleClick);

function handleClick(event) {
  var id = event.target.id;
  var x = id.charAt(0);
  var y = id.slice(-1);
  fillCell (x, y);
}

function fillCell(x,y) {
  console.log('working')
  if (board[x][y] > 0) {
    alert("No mulligans!");
  } else {
    if (currentPlayer == 1) {
      document.getElementById(x+"_"+y).innerHTML = "X";
      board[x][y] = 1;
      horizontalWin();
      columnWin();
      diagnonalWin();
      currentPlayer = 2;
    } else {
      document.getElementById(x+"_"+y).innerHTML = "O";
      board[x][y] = 2;
      horizontalWin();
      columnWin();
      diagnonalWin();
      currentPlayer = 1;
    }
  }
}

function reset () {
  for (let i = 0; i <=2; i++) {
    for (let j = 0; j <=2; j++) {
      board[i][j] = 0;
      document.getElementById(i+"_"+j).innerHTML = "";
      document.getElementById("win").innerHTML = "";
    }
  }
}

function horizontalWin() {
  if (board[0][0] === 1 && board[0][1] == 1 && board[0][2] === 1) {
    document.getElementById("win").innerHTML = "X Wins!";
  } else if (board[1][0] === 1 && board[1][1] == 1 && board[1][2] === 1) {
    document.getElementById("win").innerHTML = "X Wins!";
  } else if (board[2][0] === 1 && board[2][1] == 1 && board[2][2] === 1) {
    document.getElementById("win").innerHTML = "X Wins!";
  } else if (board[0][0] === 2 && board[0][1] == 2 && board[0][2] === 2) {
    document.getElementById("win").innerHTML = "O Wins!";
  } else if (board[1][0] === 2 && board[1][1] == 2 && board[1][2] === 2) {
    document.getElementById("win").innerHTML = "O Wins!";
  } else if (board[2][0] === 2 && board[2][1] == 2 && board[2][2] === 2) {
    document.getElementById("win").innerHTML = "O Wins!";
  } 
}

function columnWin() {
  if (board[0][0] === 1 && board[1][0] == 1 && board[2][0] === 1) {
    document.getElementById("win").innerHTML = "X Wins!";
  } else if (board[0][1] === 1 && board[1][1] == 1 && board[2][1] === 1) {
    document.getElementById("win").innerHTML = "X Wins!";
  } else if (board[0][2] === 1 && board[1][2] == 1 && board[2][2] === 1) {
    document.getElementById("win").innerHTML = "X Wins!";
  } else if (board[0][0] === 2 && board[1][0] == 2 && board[2][0] === 2) {
    document.getElementById("win").innerHTML = "O Wins!";
  } else if (board[0][1] === 2 && board[1][1] == 2 && board[2][1] === 2) {
    document.getElementById("win").innerHTML = "O Wins!";
  } else if (board[0][2] === 2 && board[1][2] == 2 && board[2][2] === 2) {
    document.getElementById("win").innerHTML = "O Wins!";
  }
}

function diagnonalWin() {
  if (board[0][0] === 1 && board[1][1] === 1 && board[2][2] === 1) {
    document.getElementById("win").innerHTML = "X Wins!";
  } else if (board[2][0] === 1 && board[1][1] === 1 && board[0][2] === 1) {
    document.getElementById("win").innerHTML = "X Wins!";
  } else if (board[0][0] === 2 && board[1][1] === 2 && board[2][2] === 2) {
    document.getElementById("win").innerHTML = "O Wins!";
  } else if (board[2][0] === 2 && board[1][1] === 2 && board[0][2] === 2) {
    document.getElementById("win").innerHTML = "O Wins!";
  }
}