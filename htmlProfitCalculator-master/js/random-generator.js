///// Main Random Number Generator \\\\\\\\

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}


function numberGenerator(){

  var number_of_rounds = 0;
  var highestNumber = 0;
  var lowestNumber = 0;
  var roundNumber = 0;
  var winner = 0;

  var bignoface = 1;
  var leochavez45 = 2;
  var dawich77 = 3;
  var hogan = 4;
  var jamesD = 5;
  var mike_anthro = 6;
  var night_night = 7;
  var pancake_analytics = 8;
  var the_snorlaxian = 9;
  var cb_rocPokemon = 10;

for(var i = 1; i < 26; i++){
  winningNumber = Math.floor(Math.random() * 10) + 1;
//  console.log(winningNumber);

  switch(winningNumber){
    case 1:
      winner = 'Winner: bignoface'
      break;
    case 2:
      winner = 'Winner: leochavez45'
      break;
    case 3:
      winner = 'Winner: dawich77'
      break;
    case 4:
      winner = 'Winner: hogan'
      break;
    case 5:
      winner = 'Winner: jamesD'
      break;
    case 6:
      winner = 'Winner: mike_anthro'
      break;
    case 7:
      winner = 'Winner: night_night'
      break;
    case 8:
      winner = 'Winner: pancake_analytics'
      break;
    case 9:
      winner = 'Winner: the_snorlaxian'
      break;
    case 10:
      winner = 'Winner: cb_rocPokemon'
      break;
    default:
      winner = 'try again'
  }

  roundNumber = "Round: " + i;

//  console.log(i);
  console.log(roundNumber);
  console.log(winner);


  document.getElementById("roundNumber").innerHTML = roundNumber;
  document.getElementById("winner").innerHTML = winner;

  sleep(2000);

  }
}

function resetCalculator(){
  document.getElementById("roundNumber").innerHTML = "Round: ";
  document.getElementById("winner").innerHTML = "Winner: ";

}



//Uglify the code using https://closure-compiler.appspot.com
