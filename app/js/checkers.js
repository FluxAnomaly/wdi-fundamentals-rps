var checkerboard = [[null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null],
                    [null, null, null, null, null, null, null, null]];

function setSquare(player, row, col) {
  checkerboard[row][col] = player;
}

function getPieceAt(row, col) {
  return checkerboard[row][col];
}

function clearBoard() {
    for (var x = 0; x < 8; x++) {
        for (var y = 0; y < 8; y++) {
            checkerboard[x][y] = null;
        }
    }
}

function setUpRed() {
    for (var x = 0; x < 3; x++) {
        for (var y = 0; y < 8; y++) {
            if (x % 2 === 0 && y % 2 === 0) {
                checkerboard[x][y] = 'R';
            } else if (x % 2 !== 0 && y % 2 !== 0) {
                checkerboard[x][y] = 'R';
            }
            //console.log(x, y);
        }
    }
}

// I decided to try a different (simpler) solution for this function.
function setUpBlack() {
   for (var a=1; a<=8; a+=2) {
       checkerboard[5][a] = 'B';
       }
   for (var b=0; b<=7; b+=2) {
       checkerboard[6][b] = 'B';
       }
   for (var c=1; c<=8; c+=2) {
       checkerboard[7][c] = 'B';
       }
}



var pieces = { 'red' : [[0,0], [0,2], [0,4], [0,6], [1,1], [1,3], [1,5], [1,7], [2,0], [2,2], [2,4], [2,6]],
                'black' : [[5,1], [5,3], [5,5], [5,7], [6,0], [6,2], [6,4], [6,6], [7,1], [7,3], [7,5], [7,7]]
             };

/*
To test your work, run each of the following two operations in the repli.it console

pieces['red'].map(function(piece){
      var row = piece[0];
      var col = piece[1];
      return checkerboard[row][col] === 'R';
    });

  pieces['black'].map(function(piece){
      var row = piece[0];
      var col = piece[1];
      return checkerboard[row][col] === 'B';
    });
*/
