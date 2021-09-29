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

window.makeEmptyMatrix = function(n) {
  return _(_.range(n)).map(function() {
    return _(_.range(n)).map(function() {
      return 0;
    });
  });
};

window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme
  var matrix =  window.makeEmptyMatrix(4);
  var board = new Board(matrix);
  var rows = board.rows();
  board.set(2, 10);
  console.log(board.rows());
// pieces left to place = n

  //place first piece in first position
    //decrement pieces left to place

  // if more pieces to place
    //get next available space


  // Using recursion and narrowing it down to smaller and smallernested arrays
  // [1, 0, 0]  // [1, 0]
  // [0, 1, 0]  // [0, 1]
  // [0, 0, 1]

  // [0, 1, 0]  [1, 0]
  // [1, 0, 0]  [0, 1]
  // [0, 0, 1]

// Starting off with a board of ones, then running conflict checks to change conflicts back to 0's

  // [1, 0, 0]
  // [0, 1, 0]
  // [0, 0, 1]

  // [1, 0, 0]
  // [0, 0, 1]
  // [0, 1, 0]

  // [0, 1, 0]
  // [1, 0, 0]
  // [0, 0, 1]

  // [0, 1, 0]
  // [0, 0, 1]
  // [1, 0, 0]

  // [0, 0, 1]
  // [0, 1, 0]
  // [1, 0, 0]

  // [0, 0, 1]
  // [1, 0, 0]
  // [0, 1, 0]

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
