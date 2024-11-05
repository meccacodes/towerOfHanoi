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

const tower1Array = board[Object.keys(board)[0]];

// add tower1 array values onto disk
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
  console.log(`The from tower index:`, fromTowerIndex);
  let fromTowerArray = gameInstance[fromTowerIndex];
  console.log(`From tower array:`, fromTowerArray);
  console.log(typeof fromTowerArray);

  // Get toTower Array
  const toTowerIndex = toTower - 1;
  console.log(`The to Tower index:`, toTowerIndex);
  const toTowerArray = gameInstance[toTowerIndex];
  console.log(`The to Tower Array:`, toTowerArray);

  const fromTowerLength = fromTowerArray.length;
  console.log(`from Tower length:`, fromTowerLength);
  const toTowerLength = toTowerArray.length;
  console.log(`to Tower length:`, toTowerLength);

  // get disk to move
  const diskToMove = fromTowerArray[fromTowerLength - 1];
  console.log(`The disk to move:`, diskToMove);

  // get top disc on target tower
  const topDiscOnTarget = toTowerArray[toTowerLength - 1];
  console.log(`The top disc on the target tower:`, topDiscOnTarget);

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
      `You can move disk ${diskToMove} from tower ${fromTower} to tower ${toTower}`
    );

    const popDisk = fromTowerArray.pop();
    console.log(`The moving disk is ${popDisk}`);
    const addDisk = toTowerArray.unshift(popDisk);
    console.log(`You can move disk`, addDisk);
    console.log(`The board now looks like this:`, gameInstance);

    return true;
  }
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
  validateMove(fromTowerNumber, toTowerNumber);
  // // return fromTower and toTower values
  // return (fromTower, toTower)
});

// //////////////////////////////////////////////////////////////////////////////
// *** SANDBOX ***
// //////////////////////////////////////////////////////////////////////////////

// Move top disk from fromTower to toTower in DOM
// const moveDisk = function (fromTower, toTower) {
//   let fromTowerValue = Number(fromTower);
//   let toTowerValue = Number(toTower);
//   console.log(`The from tower value is:`, fromTowerValue);
//   console.log(`The to tower value is:`, toTowerValue);
//   validateMove(fromTower, toTower);
// };

// if (fromTowerArray === undefined) {
//     console.log(`There is no tower ${fromTower}, try again.  Choose tower 1, 2, or 3.`);
//     return false;
//   } else if (toTowerArray === undefined) {
//     console.log(`There is no tower ${fromTower}, try again.  Choose tower 1, 2, or 3.`);
//   }

//   // check for invalid tower number
//   const isValidTower = function(number) {
//     console.log(`The number is:`, number);
//     console.log([1, 2, 3].includes(Number(number)));

//     return [1, 2, 3].includes(Number(number));
// };

// isValidTower(fromTowerNumber);

// condiitonal checks
// check for invalid tower number
// if (!isValidTower(fromTower) || !isValidTower(toTower)) {
//   console.log(`Invalid tower number. Please choose a tower number between 1 and 3.`);
//   // check for empty array
// } else if (fromTowerLength === 0) {
//   console.log(`There are no disks tower ${fromTower}, try again.  Choose a tower with disks.`)
//   // check for disk to move greater than top disc on target tower
// } else if (diskToMove > topDiscOnTarget) {
//   console.log(`You can't move disk ${diskToMove} from tower ${fromTower} to tower ${toTower} because it's bigger than the top disc on the target tower.`);
//   // check if trying to move to the same tower
// } else if (fromTowerIndex === toTowerIndex) {
//   console.log(`You can't move to the same tower. Try again.`);
// } else {
//   console.log(`You can move disk ${diskToMove} from tower ${fromTower} to tower ${toTower}`)
//   const popDisk = fromTowerArray.pop();
//   console.log(`The moving disk is ${popDisk}`);
//   const addDisk = toTowerArray.unshift(popDisk);
//     console.log(`You can move disk`, addDisk)
//     console.log(`The board now looks like this:`, gameInstance);
// }

// move disk
// if (fromTowerIndex == fromTower - 1) {
//   const popDisk = fromTowerArray.pop();
//   console.log(`The moving disk is ${popDisk}`);
//   const addDisk = toTowerArray.unshift(popDisk);
//     console.log(`You can move disk`, addDisk)
//     console.log(`The board now looks like this:`, gameInstance);
// }

// console.log(`The first index of the from tower array:`, toTowerArray[0]);

// if valid, move disc
// if not valid, display error message

// submitButton.addEventListener("click", function (event) {
//   event.preventDefault();
//   let fromTower = document.querySelector(".fromTower").value;
//   let toTower = document.querySelector(".toTower").value;

//   if (validateMove(fromTower, toTower)) {
//     moveDisc(fromTower, toTower);
//   } else {
//     displayErrorMessage();
//   }
// });

// let validateMove = function (fromTower, toTower) {
//   const fromTowerArray = boardState[`tower${fromTower}`];
//   const toTowerArray = boardState[`tower${toTower}`];

//   // Check if there's a disc to move
//   if (fromTowerArray.length === 0) {
//     return false;
//   }

//   const discToMove = fromTowerArray[fromTowerArray.length - 1];
//   const topDiscOnTarget = toTowerArray[toTowerArray.length - 1];

//   // Check if the disc can be placed on the target tower
//   if (toTowerArray.length === 0 || discToMove < topDiscOnTarget) {
//     return true;
//   }

//   return false;
// };

// let moveDisc = function (fromTower, toTower) {
//   const fromTowerArray = boardState[`tower${fromTower}`];
//   const toTowerArray = boardState[`tower${toTower}`];

//   const discToMove = fromTowerArray.pop();
//   toTowerArray.push(discToMove);

//   updateBoardDisplay();
//   console.log(`Moved disc ${discToMove} from tower ${fromTower} to tower ${toTower}`);
// };

// let displayErrorMessage = function () {
//   console.log("Invalid move. Please try again.");
//   // You can replace this with a more user-friendly way to display the error message
// };

// let updateBoardDisplay = function () {
//   // Implement this function to update the visual representation of the board
//   // based on the current boardState
// };
