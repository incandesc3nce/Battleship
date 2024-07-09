import reset from "../game/reset.js";

export default function showResetDialog(playerWon) { 
  const dialog = document.createElement("dialog");
  dialog.classList.add("show");
  if (playerWon) {
    dialog.textContent = "You won!";
  } else {
    dialog.textContent = "You lost!";
  }
  const resetButton = document.createElement("button");
  resetButton.addEventListener("click", () => {
    reset();
    dialog.close();
    dialog.remove();
  });
  
 dialog.appendChild(resetButton);

 resetButton.textContent = "Play again";

 document.body.appendChild(dialog);

 dialog.showModal();
}