alert("Zombie Apocalypse!");

// variables
let weapon = prompt("Choose your weapon!");
let randomNumber = Math.round( Math.random() );

// actions
alert("You attack the zombie with your "+weapon+"!");

if(randomNumber===0){
  alert("It's a critical hit!");
} else {
  alert("Ahhh you got bitten!");
}
