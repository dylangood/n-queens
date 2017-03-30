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



window.findNRooksSolution = function(n, numRooks, boardState) {
  var solution = [];
  if (numRooks === undefined) {
    var numRooks = 0;
  }
  if (boardState === undefined) {
    var boardState = new Board( {'n': n} );
  }

  for (var i = 0; i < boardState.attributes.n; i++) {
    for (var j = 0; j < boardState.attributes.n; j++) {
      //console.log("i: ", i, "    j: ", j, "   numRooks: ", numRooks);
      if ( boardState.rows()[i][j] === 0 ) {
        boardState.togglePiece(i, j);
        if ( boardState.hasAnyRooksConflicts() ) {
          //console.log('dead tree: ', JSON.stringify(boardState.rows()));
          boardState.togglePiece(i, j);
          continue;
        }
        numRooks++;
        if (numRooks < n) {
          return findNRooksSolution(n, numRooks, boardState);
        }
        if ( numRooks === n ) {
          solution = boardState.rows();
          return solution;
        }
      }
    }
  }
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
