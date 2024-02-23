"use strict";

function boardHasWinner(tickTackToeBoard, playerValue) {
  if (tickTackToeBoard[0][0] == playerValue && tickTackToeBoard[0][1] == playerValue && tickTackToeBoard[0][2] == playerValue) {
    return true;
  }

  if (tickTackToeBoard[1][0] == playerValue && tickTackToeBoard[1][1] == playerValue && tickTackToeBoard[1][2] == playerValue) {
    return true;
  }

  if (tickTackToeBoard[2][0] == playerValue && tickTackToeBoard[2][1] == playerValue && tickTackToeBoard[2][2] == playerValue) {
    return true;
  }

  if (tickTackToeBoard[0][0] == playerValue && tickTackToeBoard[1][0] == playerValue && tickTackToeBoard[2][0] == playerValue) {
    return true;
  }

  if (tickTackToeBoard[0][1] == playerValue && tickTackToeBoard[1][1] == playerValue && tickTackToeBoard[2][1] == playerValue) {
    return true;
  }

  if (tickTackToeBoard[0][2] == playerValue && tickTackToeBoard[1][2] == playerValue && tickTackToeBoard[2][2] == playerValue) {
    return true;
  }

  if (tickTackToeBoard[0][0] == playerValue && tickTackToeBoard[1][1] == playerValue && tickTackToeBoard[2][2] == playerValue) {
    return true;
  }

  if (tickTackToeBoard[0][2] == playerValue && tickTackToeBoard[1][1] == playerValue && tickTackToeBoard[2][0] == playerValue) {
    return true;
  }

  return false;
}

console.log(
  boardHasWinner(
    [
      [1, 1, 1],
      [0, 0, 0],
      [0, 0, 0],
    ],
    1
  )
);

console.log(
  boardHasWinner(
    [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    1
  )
);

console.log(
  boardHasWinner(
    [
      [0, 0, 0],
      [0, 0, 0],
      [1, 1, 1],
    ],
    1
  )
);

console.log(
  boardHasWinner(
    [
      [1, 0, 0],
      [1, 0, 0],
      [1, 0, 0],
    ],
    1
  )
);

console.log(
  boardHasWinner(
    [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ],
    1
  )
);

console.log(
  boardHasWinner(
    [
      [0, 0, 1],
      [0, 0, 1],
      [0, 0, 1],
    ],
    1
  )
);

console.log(
  boardHasWinner(
    [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ],
    1
  )
);

console.log(
  boardHasWinner(
    [
      [0, 0, 1],
      [0, 1, 0],
      [1, 0, 0],
    ],
    1
  )
);

console.log(
  boardHasWinner(
    [
      [2, 2, 2],
      [0, 0, 0],
      [0, 0, 0],
    ],
    2
  )
);

console.log(
  boardHasWinner(
    [
      [0, 0, 0],
      [2, 2, 2],
      [0, 0, 0],
    ],
    2
  )
);

console.log(
  boardHasWinner(
    [
      [0, 0, 0],
      [0, 0, 0],
      [2, 2, 2],
    ],
    2
  )
);

console.log(
  boardHasWinner(
    [
      [2, 0, 0],
      [2, 0, 0],
      [2, 0, 0],
    ],
    2
  )
);

console.log(
  boardHasWinner(
    [
      [0, 2, 0],
      [0, 2, 0],
      [0, 2, 0],
    ],
    2
  )
);

console.log(
  boardHasWinner(
    [
      [0, 0, 2],
      [0, 0, 2],
      [0, 0, 2],
    ],
    2
  )
);

console.log(
  boardHasWinner(
    [
      [2, 0, 0],
      [0, 2, 0],
      [0, 0, 2],
    ],
    2
  )
);

console.log(
  boardHasWinner(
    [
      [0, 0, 2],
      [0, 2, 0],
      [2, 0, 0],
    ],
    2
  )
);

console.log(
  boardHasWinner(
    [
      [1, 2, 1],
      [1, 2, 2],
      [2, 1, 1],
    ],
    1
  )
);

console.log(
  boardHasWinner(
    [
      [1, 2, 1],
      [1, 2, 2],
      [2, 1, 1],
    ],
    2
  )
);
