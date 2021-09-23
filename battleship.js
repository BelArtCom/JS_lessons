const SEA_CELLS_NUMBER = 10;
const SHIP_CELLS_NUMBER = 5;

const maxCellIndex = SEA_CELLS_NUMBER - 1;
const start = Math.floor(
  Math.random() * (SEA_CELLS_NUMBER - SHIP_CELLS_NUMBER + 1)
);

const locationList = Array.from(
  { length: SHIP_CELLS_NUMBER },
  (_, i) => i + start
);

let hits = 0;
let guesses = 0;
let isSunk = false;

while (!isSunk) {
  const guess = Number(
    prompt(`Ready, aim, fire! (enter a number 0-${maxCellIndex}):`)
  );
  if (Number.isNaN(guess) || guess < 0 || guess > maxCellIndex) {
    alert("Please enter a valid cell number!");
  } else {
    guesses++;
    if (locationList.includes(guess)) {
      hits++;
      alert("HIT!");
      if (hits == SHIP_CELLS_NUMBER) {
        isSunk = true;
        alert("You sank my battleship!");
        const accuracy = SHIP_CELLS_NUMBER / guesses;
        alert(
          `You took ${guesses} guesses to sink the battleship, which means your shooting accuracy was ${accuracy}`
        );
      }
    } else {
      alert("MISS");
    }
  }
}
