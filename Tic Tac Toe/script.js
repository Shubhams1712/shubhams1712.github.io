let boxes = document.querySelectorAll(".box");
let turn = "X";
let gameOver = false;
let alertMessage = document.getElementById("alert-message");
let alertBox = document.querySelector(".alert");

let winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    let boxtext = box.querySelector(".boxtext");

    if (boxtext.innerText === "" && !gameOver) {
      boxtext.innerText = turn;
      turn = changeTurn();
      checkWin();
    }
  });
});

function changeTurn() {
  return turn === "X" ? "O" : "X";
}


function clear() {
  document.querySelectorAll(".boxtext").forEach((box) => {
    box.innerText = "";
  });

  turn = "X";
  gameOver = false;
}


function showAlert(message) {
  alertMessage.innerText = message;
  alertBox.classList.add("show");
}

function hideAlert() {
  alertBox.classList.remove("show");
  clear();
}

function checkWin() {
  for (let pattern of winPatterns) {
    let a = boxes[pattern[0]].querySelector(".boxtext").innerText;
    let b = boxes[pattern[1]].querySelector(".boxtext").innerText;
    let c = boxes[pattern[2]].querySelector(".boxtext").innerText;
    if (a !== "" && a === b && b === c) {
      gameOver = true;
      setTimeout(() => {
        showAlert(`Player ${a} wins!`);
      }, 20);
      return;
    }

}
let allFilled = [...boxes].every((box) => box.querySelector(".boxtext").innerText !== "");
if (allFilled && !gameOver) {
  gameOver = true;
  setTimeout(() => {
    showAlert(`It's a Draw`);
  }, 10);
  return;
}
}

function reset() {
  clear();
}

const bgMusic = document.getElementById("bg-music");
bgMusic.volume = 0.5;

let boxIcon = document.querySelector("i");

boxIcon.addEventListener("click", () => {
  if (boxIcon.className === "bx bx-volume-full") {
    boxIcon.classList.remove("bx-volume-full");
    boxIcon.classList.add("bx-volume-mute");
    bgMusic.volume = 0;
  } else {
    boxIcon.classList.remove("bx-volume-mute");
    boxIcon.classList.add("bx-volume-full");
    bgMusic.volume = 0.5;
  }
})