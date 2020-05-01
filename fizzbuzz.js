let randomNumber = Math.round( Math.random()*15 );
// let randomNumber = 0;
// let randomNumber = 15;

if(randomNumber%3===0 && randomNumber !== 0) {
  if(randomNumber%5===0){
    alert("fizzbuzz");
  }
  alert("fizz");
}
else if (randomNumber%5===0 && randomNumber !== 0){
  alert("buzz");
}
else {
  console.log(randomNumber);
}
