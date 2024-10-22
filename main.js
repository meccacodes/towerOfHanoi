// A board representing 3 towers, and 5 discs on the first tower in ascending order.

let startingBoard = [[5, 4, 3, 2, 1], [], []];

let boardState = {
  tower1: [5, 4, 3, 2, 1],
  tower2: [],
  tower3: [],
};

// add tower1 array values onto disks
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
        disk.innerHTML = `<span class="diskSpan disk${diskValue}">${diskValue}</span>`;
      } else {
        disk.innerHTML = "";
      }
    }
  });
});

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
});

// check if move is valid:
// 1. check if disc can be moved (must be on top)
// 2. check if placing on top of a smaller disc
// if valid, move disc
// if not valid, display error message
let validateMove = function (fromTower, toTower) {};

let moveDisc = function (fromTower, toTower) {
  console.log(`Move disc from tower ${fromTower} to tower ${toTower}`);
};

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
