// console.log("How are you doing?");

// let Name = "John";
// let surname = "Doe";

// console.log(Name);
// console.log(surname);

// var a = 9;
// var b = a+1;
// var percentage= a/b;

// let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
// for(let i=0;i<=answer;i++){
//     if(answer%15===0){
//         console.log("FIZZBUZZ");
//     }else if(answer%5===0){
//         console.log("BUZZ");
//     }else if(answer%3===0){
//         console.log("FIZZ");
//     }else{
//         console.log(i);
//     }
// }

let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
