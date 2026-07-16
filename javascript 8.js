//1.Take two variables price1 and price2, and compare them using all comparison operators (==, ===, !=, !==, >, <, >=, <=), printing each result with console.log.
let price1=1000;
let price2="1000";
console.log(price1==price2);
console.log(price1===price2);
console.log(price1!=price2);
console.log(price1!==price2);
console.log(price1>price2);
console.log(price1<price2);
console.log(price1>=price2);
console.log(price1<=price2);

//2.Guess the result of "5" == 5 and "5" === 5 first, then write code to verify your guess.
 let a="5";
 let b=5;
 console.log(a==b); //true
 console.log(a===b); //false

//3.Create a variable isRaining (true/false). If it is true, print "Take an umbrella".

let  isRaining=true;

if( isRaining){
    console.log("Take an umbrella")
}

//4.Take a variable stock. If stock is 0, print "Out of stock" (use only if, no else).

let stock=0;
if(stock==0){
    console.log("out of stock")
}

//5.Take a number variable and check whether it is positive or negative (using if-else).

let money=-10;

if(money>0){
    console.log("positive")
}
else{
    console.log("negative")
}