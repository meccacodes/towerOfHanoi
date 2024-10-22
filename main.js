// A board representing 3 towers, and 5 discs on the first tower in ascending order.

let startingBoard = [[5, 4, 3, 2, 1], [], []];

let boardState = {
  tower1: [5, 4, 3, 2, 1],
  tower2: [],
  tower3: [],
};

// display the board
const displayBoard = function () {
  console.log("Board State:", boardState);
};

displayBoard();

// map tower1 array into disks
document.addEventListener("DOMContentLoaded", () => {
  const disks = [
    document.querySelector(".disk-1"),
    document.querySelector(".disk-2"),
    document.querySelector(".disk-3"),
    document.querySelector(".disk-4"),
    document.querySelector(".disk-5"),
  ];

  // Reverse the order of the disks array
  const reversedDisks = disks.reverse();

  reversedDisks.forEach((disk, index) => {
    if (disk) {
      const diskValue = boardState.tower1[index];
      if (diskValue) {
        disk.innerHTML = `<span class="disk${diskValue}">${diskValue}</span>`;
      } else {
        disk.innerHTML = "";
      }
    }
  });

  // Rest of your code...
});

// player submits a move
// move is the peg number to move from, and the peg number to move to

let moveDisc = function (peg1, peg2) {
  console.log(`Move disc from peg ${peg1} to peg ${peg2}`);
  // check if move is valid:
  // 1. check if disc can be moved (must be on top)
  // 2. check if placing on top of a smaller disc
};

// starting board
// --- 5 4 3 2 1
// ---
// ---

// Move the disc from peg 1 to peg 2
moveDisc(1, 2);
// That move was successful, board is now:
// --- 5 4 3 2
// --- 1
// ---

// Move disc from peg 1 to peg 3
moveDisc(1, 3);
// That move was successful, board is now:
// --- 5 4 3
// --- 1
// --- 2

// Move disc from peg 1 to peg 2
moveDisc(1, 2);
// You cannot move a larger disc on top of a smaller one, board is still:
// --- 5 4 3
// --- 1
// --- 2
