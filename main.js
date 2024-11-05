// Grab HTML elements
const fromTower = document.querySelector(".fromTower");
const toTower = document.querySelector(".toTower");
const moveButton = document.querySelector("#moveButton");

const tower1 = document.querySelector(".tower1");
const tower2 = document.querySelector(".tower2");
const tower3 = document.querySelector(".tower3");

const disks = [
  document.querySelector(".disk-1"),
  document.querySelector(".disk-2"),
  document.querySelector(".disk-3"),
  document.querySelector(".disk-4"),
  document.querySelector(".disk-5"),
];

// A board representing 3 towers, and 5 discs on the first tower in ascending order.

const startingBoard = [[5, 4, 3, 2, 1], [], []];

let board = {
  tower1: [5, 4, 3, 2, 1],
  tower2: [],
  tower3: [],
};

// getInnerArrays
const gameInstance = [...startingBoard];

console.log(`Starting board instance, this game's instance:`, gameInstance);

// add array values onto disks
document.addEventListener("DOMContentLoaded", () => {
  // Reverse the order of the disks array
  const reversedDisks = disks.reverse();

  reversedDisks.forEach((disk, index) => {
    if (disk) {
      const diskValue = board.tower1[index];
      if (diskValue) {
        disk.innerHTML = `<span class="diskSpan disk${diskValue}">${diskValue}</span>`;
      } else {
        disk.innerHTML = "";
      }
    }
  });
});

// check if move is valid:
const validateMove = function (fromTower, toTower) {
  console.log(
    `Validating move... the from Tower is ${fromTower} and the toTower is ${toTower}`
  );

  // Get fromTower array
  const fromTowerIndex = fromTower - 1;
  let fromTowerArray = gameInstance[fromTowerIndex];

  // Get toTower Array
  const toTowerIndex = toTower - 1;
  const toTowerArray = gameInstance[toTowerIndex];

  const fromTowerLength = fromTowerArray.length;
  const toTowerLength = toTowerArray.length;

  // get disk to move
  const diskToMove = fromTowerArray[fromTowerLength - 1];

  // get top disc on target tower
  const topDiscOnTarget = toTowerArray[toTowerLength - 1];

  // check if fromTower or toTower is undefined
  if (fromTowerArray === undefined || toTowerArray === undefined) {
    if (fromTowerArray === undefined) {
      console.log(
        `There is no tower ${fromTower}, try again.  Choose tower 1, 2, or 3.`
      );
      return false;
    } else {
      console.log(
        `There is no tower ${toTower}, try again.  Choose tower 1, 2, or 3.`
      );
      return false;
    }
  } // check if fromTower is empty
  else if (fromTowerArray.length === 0) {
    console.log(
      `There are no disks in tower ${fromTower}, try again.  Choose a tower with disks.`
    );
    return false;
  } // check if disk to move is larger than top disc on target tower
  else if (diskToMove > topDiscOnTarget) {
    console.log(
      `The disk to move is larger than the top disc on the target tower. Try again.`
    );
    return false;
  } else {
    console.log(
      `Valid move! You can move disk ${diskToMove} from tower ${fromTower} to tower ${toTower}`
    );
    const popDisk = fromTowerArray.pop();
    const addDisk = toTowerArray.push(popDisk);
    console.log(`The board now looks like this:`, gameInstance);
    return true;
  }
};

// helper function to compare gameInstance array with winning array
const isWinningArray = function (gameInstanceArray, winningArray) {
  let compareArrays =
    gameInstanceArray.length === winningArray.length &&
    gameInstanceArray.every(
      (element, index) => element === winningArray[index]
    );
  if (compareArrays) {
    console.log(`checkWinner... You've won!`);
  } else console.log("checkWinner... Not yet!");
  return compareArrays;
};

// check if the game is won
const checkWinner = function () {
  const winningTower = [5, 4, 3, 2, 1];
  console.log(`Checking for a winner...`);
  console.log(`This game's board:`, gameInstance);
  console.log(`Tower 2:`, gameInstance[1]);
  console.log(`Tower 3:`, gameInstance[2]);
  const checkTower2 = isWinningArray(gameInstance[1], winningTower);
  const checkTower3 = isWinningArray(gameInstance[2], winningTower);
  console.log(`Tower 2 check:`, checkTower2);
  console.log(`Tower 3 check:`, checkTower3);
  if (checkTower2 || checkTower3) {
    console.log(`checkWinner: You've won!`);
  } else console.log(`checkWinner: Not yet!`);
};

// player submits a move

// listen for submit button
moveButton.addEventListener("click", function (event) {
  event.preventDefault();
  // get the tower numbers from the inputs
  let fromTower = document.querySelector(".fromTower").value;
  console.log(`From tower value:`, typeof fromTower, fromTower);
  let toTower = document.querySelector(".toTower").value;
  console.log(`to tower value:`, typeof toTower, toTower);
  const fromTowerNumber = Number(fromTower);
  const toTowerNumber = Number(toTower);
  // validate the move
  validateMove(fromTowerNumber, toTowerNumber);
  // check to see if game is won
  // get gameInstance arrays
  let tower2 = gameInstance[1];
  let tower3 = gameInstance[2];
  // get winning array
  let winningTower = [5, 4, 3, 2, 1];
  checkWinner(tower2, winningTower);
  checkWinner(tower3, winningTower);
});

// //////////////////////////////////////////////////////////////////////////////
// *** SANDBOX ***
// //////////////////////////////////////////////////////////////////////////////
