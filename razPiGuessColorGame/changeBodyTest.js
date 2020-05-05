const mainStage = document.getElementsByTagName("body");
const someText = document.getElementsByTagName("div");
console.log(mainStage);
console.log(someText);

// someText[0].addEventListener("click", function(){ alert('sup!'); });

function someFun(){
  alert('sup!');
  mainStage[0].setAttribute("style", "background-color: orange;");
}

someText[0].addEventListener("click", someFun);
