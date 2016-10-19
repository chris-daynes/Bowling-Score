var frames = [
    [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4] //total = 119
  ]

function sumScore (game) {
  var total = 0;
  for (var i = 0; i < 9; i++) {
     var sum = game[i][0] + game[i][1];
     if (sum === 10) { //if a strike or a spare
       sum += game[i + 1][0]; //add ball 1, 1 frame over
       if (game[i][0] === 10) { //if a strike
          if (sum === 20) { //if follow up is a strike
            sum += game[i+2][0]; //ad ball 1 two frames over
          } else {
            sum += game[i+1][1]; //add ball 2 1 frame over
          }
        }
     }
     console.log(total + " + " + sum);
       total += sum;
  }
  for (var i = 0; i < game[9].length; i++) {
    total += game[9][i];
  }
  return total;
}
