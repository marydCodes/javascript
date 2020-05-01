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

/* FizzBuzz 2
Print all numbers from 1 to 100 with three exceptions:
- if number is divisible by 3, print fizz
- if number is divisible by 5, print buzz
- if number is divisible by 3 and 5, print fizzbuzz
*/

for(let i=1; i<=100; i++){
  if(i%3===0){
    if(i%5===0){
      console.log("fizzbuzz");
    }
    console.log("fizz");
  }
  else if (i%5===0){
    console.log("buzz");
  }
  else {
    console.log(i);
  }
}
