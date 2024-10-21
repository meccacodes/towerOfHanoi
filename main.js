// A board representing 3 pegs, and 5 discs on the first peg in ascending order.  This is a normal starting position for the game.
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

// player submits a move
prompt(": ");
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
