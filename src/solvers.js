/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

// window.findNRooksSolution = function (n) {
//   var solution = null; //fixme
//   var matrixes = [];
//   for (var j = 0; j < n; j++) {
//     for (var i = 0; i < n; i++) {
//       var board = new Board({ n: n });
//       var rows = board.rows();
//       var numPiecesLeft = n;
//       rows[j][i] = 1;

//       // [ 0, 0, 1 ]
//       // [ 0, 0, 0 ]
//       // [ 0, 0, 0 ]

//       if (!numPiecesLeft) {
//         return rows;
//       }
//       for (var r = 0; r < n; r++) {
//         for (var c = 0; c < n; c++) {
//           if (numPiecesLeft) {
//             if (!rows[r][c]) {
//               rows[r][c] = 1;
//               //check if conflicts
//               if (board.hasAnyRooksConflicts()) {
//                 rows[r][c] = 0;
//               }

//               if (rows[r][c]) {
//                 numPiecesLeft--;
//               }
//             }
//           }
//         }
//       }
//       matrixes.push(rows);
//     }
//   }

//   console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
//   console.log(matrixes);
//   return matrixes[0];
// };

window.findSolution = function (row, n, board, validator, callback) {
  //if all rows exhausted
  if (row === n) {
    return callback();
  }

  // iterate over possible decisions
  for (var i = 0; i < n; i++) {
    // place a piece
    board.togglePiece(row, i);
    // recurse into remaining problem
    if ( !board[validator]() ) {
      var result = findSolution(row+1, n, board, validator, callback)
      if ( result ) {
        return result; // Eject button
      }
    }
    //unplace a piece
    board.togglePiece(row, i)
  }
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function (n) {

  var board = new Board({ n: n });

  var solution = findSolution(0, n, board, 'hasAnyRooksConflicts', function() {
    return _.map(board.rows(), function(row) {
      return row.slice();
    });
  });

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
}

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function (n) {
  var solutionCount = 0;

  var board = new Board({ n: n });

  findSolution(0, n, board, 'hasAnyRooksConflicts', function() {
    solutionCount++;
  });

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function (n) {

  var board = new Board({ n: n });

  var solution = findSolution(0, n, board, 'hasAnyQueensConflicts', function() {
    return _.map(board.rows(), function(row) {
      return row.slice();
    });
  }) || board.rows();

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function (n) {
  var solutionCount = 0;
  var board = new Board({n:n})

  findSolution(0, n, board, 'hasAnyQueensConflicts', function() {
    solutionCount++;
  })

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
