// --- FUNCTIONS --- //
function makeColourValue(){
  return Math.round(Math.random()*255);
}

function setButtonColour(button, red, green, blue){
  button.setAttribute(
    'style',
    'background-color: rgb('+ red +','+ green +','+ blue +');'
  );
}

function setBackgroundColour(body, red, green, blue){
  body.setAttribute(
    'style',
    'background-color: rgb('+ red +','+ green +','+ blue +');'
  );
}


// --- VARIABLES --- //
let heading = document.getElementById("colourValue");
let buttons = document.getElementsByClassName("colourButton");
// create a variable that stores a random number between 0 and the number of buttons:
let answerButton = Math.round(Math.random()*(buttons.length-1));
let answerMessage = document.getElementById("answer");
let mainStage = document.getElementsByTagName("body");


// --- CHANGE SELECTIONS --- //
function startGame(){
  answerMessage.innerHTML = "";
  setBackgroundColour(mainStage[0], 255, 255, 255);

  for(let i=0; i < buttons.length; i++){
    let red = makeColourValue();
    let green = makeColourValue();
    let blue = makeColourValue();

    setButtonColour(buttons[i], red, green, blue);

    if(i === answerButton){
      heading.innerHTML = `(${red}, ${green}, ${blue})`; // display the RGB of random answerButton
    }

    buttons[i].addEventListener("click", function(){
      if(this === buttons[answerButton]){
        answerMessage.innerHTML = "That's right!";
        setBackgroundColour(mainStage[0], red, green, blue);
      }
      else {
        answerMessage.innerHTML = "Sorry, guess again.";
      }
    });
  }
}

startGame();
document.getElementById("resetButton").addEventListener("click", startGame);
