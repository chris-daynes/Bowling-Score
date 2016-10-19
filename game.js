//Score 119:

var frames = [
  [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
];
//
// Score 141:
//
// var frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]

function totalScore(games) {
  var total = 0;
  for (var i = 0; i < 9; i++) {
    var sum = games[i][0] + games[i][1];
	if (sum === 10) { 						//strike and spare
	    sum += games[i+1][0];
	    if (games[i][0] === 10)	{		//if a strike.
	    	if(sum === 20) {
	    		sum += games[i+2][0];
	    	}else {
	    		sum += games[i+1][1];
	    	}
	    }
	 }


  	console.log(sum);
  	total += sum;
  }
  for (var j = 0; j < games[9].length; j++) {
  	total += games[9][j];
  }
  return total;
}

totalScore(frames);
