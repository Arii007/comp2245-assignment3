
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
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    });
  });
  