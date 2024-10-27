
document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div");
    squares.forEach(square => square.classList.add("square"));
  });
  
 
  let currentPlayer = "X";
  
  document.querySelectorAll("#board div").forEach(square => {
    square.addEventListener("click", () => {
      if (square.textContent === "") {
        square.textContent = currentPlayer;
        square.classList.add(currentPlayer);
        checkWinner(); 
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    });
  });
  
 
  document.querySelectorAll("#board div").forEach(square => {
    square.addEventListener("mouseover", () => square.classList.add("hover"));
    square.addEventListener("mouseout", () => square.classList.remove("hover"));
  });
  
  
  function checkWinner() {
    const squares = document.querySelectorAll("#board div");
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
  
    for (const combo of winningCombinations) {
      const [a, b, c] = combo;
      if (squares[a].textContent && squares[a].textContent === squares[b].textContent && squares[a].textContent === squares[c].textContent) {
        document.getElementById("status").textContent = `Congratulations! ${squares[a].textContent} is the Winner!`;
        document.getElementById("status").classList.add("you-won");
        return;
      }
    }
  }
  
  
  document.getElementById("new-game").addEventListener("click", () => {
    const squares = document.querySelectorAll("#board div");
    squares.forEach(square => {
      square.textContent = "";
      square.classList.remove("X", "O");
    });
    document.getElementById("status").textContent = "Move your mouse over a square and click to play an X or an O.";
    document.getElementById("status").classList.remove("you-won");
    currentPlayer = "X"; 
  });
  