var scores= [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];

var costs = [.25, .27, .25, .25, .25, .25,
    .33, .31, .25, .29, .27, .22,
    .31, .25, .25, .33, .21, .25,
    .25, .25, .28, .25, .24, .22,
    .20, .25, .30, .25, .24, .25,
    .25, .25, .27, .25, .26, .29];


 function printAndGetHighScore(scores) {
     var output;
     var highScore=0;
     for (var i = 0; i < scores.length; i++) {

         output = 'bubble solution ' + i + ' score ' + scores[i];
         if (scores[i] > highScore) {
             highScore = scores[i];
         }

     }
     return highScore
 }

function getBestResult(scores,highScore ) {
    var bestSolution=[];

    for (let j = 0; j < scores.length; j++) {
        if (highScore === scores[j]) {

            bestSolution.push(j);
            // bestSolution[j] = j ;
        }

    }
    return bestSolution;
}
function gitMostCostEffectiveSolution(scores, costs, highScore) {
    var index;
    var cost =100;

       for(let k=0; k < scores.length; k++){
           if(highScore===scores[k]){
               if( cost>costs[k]){
                   index =k;
                   cost= cost[k];
               }
           }
       }
       return index;

}



var highScore = printAndGetHighScore(scores);
 var bestSolution = getBestResult(scores,highScore)
var mostCostEffective= gitMostCostEffectiveSolution(scores,costs,highScore)
console.log('Bubbles tests: ' + scores.length);
console.log('Highest bubble score : '+ highScore);
console.log( bestSolution);
console.log('Bubble Solution  №' +mostCostEffective +' is most cost effective');