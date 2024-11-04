// Grab HTML elements
const fromTower = document.querySelector(".fromTower");
const toTower = document.querySelector(".toTower");
const moveButton = document.querySelector(".moveButton");

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

// console.log(`starting game board:`, startingBoard);
// console.log(`Tower 1's last element:`, tower1Array[tower1Array.length - 1])
// console.log(`The tower 1 array, hardcoded:`, board[Object.keys(board)[0]])


// check if move is valid:
const validateMove = function (fromTower, toTower) {
  // Get fromTower array
  const fromTowerIndex = fromTower - 1;
  console.log(`The from tower index:`, fromTowerIndex)
  console.log(`Validating move... the from Tower is ${fromTower} and the toTower is ${toTower}`);
  const fromTowerArray = gameInstance[fromTowerIndex];
  console.log(`From tower array:`, fromTowerArray);
  // Get toTower Array
  const toTowerIndex = toTower - 1;
  console.log(`The to Tower index:`, toTowerIndex);
  const toTowerArray = gameInstance[toTowerIndex];
  console.log(`The to Tower Array:`, toTowerArray);
  const fromTowerLength = fromTowerArray.length; 
  console.log(`from Tower length:`, fromTowerLength);
  if (fromTowerLength === 0) {
    console.log(`There are no disks tower ${fromTower}, try again.  Choose a tower with disks.`)
  } else if (fromTowerIndex == fromTower - 1) {
    const popDisk = fromTowerArray.pop();
    console.log(`The moving disk is ${popDisk}`);
    const addDisk = toTowerArray.unshift(popDisk);
    console.log(`The board now looks like this:`, gameInstance);
  }


  // if (fromTowerIndex == fromTower - 1 && fromTowerArray.lenght != 0) {
  //   console.log(true);
  //   const popDisk = fromTowerArray.pop();
  //   console.log(`The popped disk:`, popDisk);
  //   console.log(fromTowerArray);
  //   const addDisk = toTowerArray.unshift(popDisk);
  //   console.log(addDisk);
  //   console.log(`New to Tower Array:`, toTowerArray);
  // } else {
  //   console.log(`This tower is empty, try again.  Choose a tower with disks`);
  // }
// 2. check if placing on top of a smaller disc

// if valid, move disc
// if not valid, display error message
};

// Move top disk from fromTower to toTower in DOM
const moveDisk = function (fromTower, toTower) {
  // const fromTowerArray = gameInstance[fromTower];
  // console.log(`The from Array:`, fromTowerArray);
  // console.log(`Move disc from tower ${fromTower} to tower ${toTower}`);
  validateMove(fromTower, toTower);
};

// player submits a move

const submitButton = document.querySelector("#moveButton");

// listen for submit button
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  // get the tower numbers from the inputs
  let fromTower = document.querySelector(".fromTower").value;
  console.log(fromTower);
  let toTower = document.querySelector(".toTower").value;
  console.log(toTower);
  moveDisk(fromTower, toTower);
  // return fromTower and toTower values
  return (fromTower, toTower)
});



// //////////////////////////////////////////////////////////////////////////////
// *** SANDBOX ***
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
