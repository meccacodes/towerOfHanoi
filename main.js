// A board representing 3 pegs, and 5 discs on the first peg in ascending order.  This is a normal starting position for the game.
const startingBoard = [[5, 4, 3, 2, 1], [], []];

let boardState = startingBoard;

// display the board
let displayBoard = function () {
  console.log(boardState);
};

// player submits a move
// move is the peg number to move from, and the peg number to move to

let moveDisc = function (peg1, peg2) {
  console.log(`Move disc from peg ${peg1} to peg ${peg2}`);
  // check if disc can be moved (must be on top)
  // check if placing on top of a smaller disc
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
