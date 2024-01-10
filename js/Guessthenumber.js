let a = Math.random()*100;
a = Number.parseInt(a)
let number;
let score = 100;
while (number!=a){
    score = score -1;
    num = prompt("Enter the number:");
    if (number==a) {
        console.log("congratulations! your guess is correct.")
        console.log(`you guess the actual number in ${100-score} chances.`)
    }
    else if (number>a && number<100){
        console.log("your number is greater than actual number.")
    }
    else if (number<a && number>0){
        console.log("your number is smaller than actual number.")
    }
    else {
        console.log("Enter number between 1 to 100.")
    }
}