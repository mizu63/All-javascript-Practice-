// Module 8: Conditionals & Decision Making — Practice Tasks

// //1.Take two variables price1 and price2, and compare them using all comparison operators (==, ===, !=, !==, >, <, >=, <=), printing each result with console.log.
// let price1=1000;
// let price2="1000";
// console.log(price1==price2);
// console.log(price1===price2);
// console.log(price1!=price2);
// console.log(price1!==price2);
// console.log(price1>price2);
// console.log(price1<price2);
// console.log(price1>=price2);
// console.log(price1<=price2);

// //2.Guess the result of "5" == 5 and "5" === 5 first, then write code to verify your guess.
//  let a="5";
//  let b=5;
//  console.log(a==b); //true
//  console.log(a===b); //false

// //3.Create a variable isRaining (true/false). If it is true, print "Take an umbrella".

// let  isRaining=true;

// if( isRaining){
//     console.log("Take an umbrella")
// }

// //4.Take a variable stock. If stock is 0, print "Out of stock" (use only if, no else).

// let stock=0;
// if(stock==0){
//     console.log("out of stock")
// }

// //5.Take a number variable and check whether it is positive or negative (using if-else).

// let money=-10;

// if(money>0){
//     console.log("positive")
// }
// else{
//     console.log("negative")
// }
//6.Take a year variable and check whether it is a leap year (hint: year % 4 === 0).

// let year=2012;
// if(year%4===0){
//     console.log("leap year")
// }
// else{
//     console.log("Not a leap yeatr")
// }
//7.Take a speed variable. If speed is greater than 80, print "Overspeeding", otherwise print "Normal speed".

// let speed=80;

// if(speed>80){
//     console.log("Overspeeding")
// }
// else{
//      console.log("Normal speed")
// }
//8.Using age and hasTicket, print "Entry allowed" if age is above 18 AND the person has a ticket (use &&).

// let age=21;
// let hasTicket=true;
// if(age>18 && hasTicket){
//     console.log("Entry allowed")
// }
// else{
//      console.log(" Not Entry allowed")
// }
//9.Using isWeekend and isHoliday, print "No work today" if either one is true (use ||).

// let isWeekend=true;
// let isHoliday=false;
// if(isHoliday || isWeekend ){
//     console.log("No work today")
// }
//10.Build a simple login system — print "Login successful" only if both username and password are correct.

// let username = "admin";
// let password = "123456";

// if (username === "admin" && password === "123456") {
//     console.log("Login successful");
// }

//11.Build a grading system using a marks variable (A+, A, B, C, F) — it must have at least 5 condition branches.

// let marks = 80;
// if (marks >= 80) {
//     console.log("A+")
// }
// else if (marks >= 70) {
//     console.log("A")
// }
// else if (marks >= 60) {
//     console.log("B")
// }
// else if (marks >= 50) {
//     console.log("C")

// }
// else {
//     console.log("F")
// }

//12.Using a bmi variable, determine the category — Underweight, Normal, Overweight, Obese (use if-else if).

// let bmi = 20;
// if (bmi < 18.5) {
//     console.log("Underweight")
// }
// else if (bmi < 25) {
//     console.log("Normal")
// }
// else if (bmi < 30) {
//     console.log("Overweight")
// }
// else {
//     console.log("Obese")
// }

//13.Using a month number (1-12), determine which season that month falls in (Winter, Summer, Monsoon, etc.).

// let month = 7;
// if (month === 12 || month === 1 || month === 2 || month === 3) {
//     console.log("Winter")
// }
// else if (month === 4 || month === 5 || month === 6 || month === 7) {
//     console.log("Summer")
// }
// else if (month === 8 || month === 9 || month === 10 || month === 11) {
//     console.log("Monsoon")
// }

//14.Using age and hasID, use nested if-else to check whether someone is eligible to vote.

// let age = 21;
// let hasID = true;
// if (age >= 18 && hasID) {
//     console.log("eligible to vote")
// }
// else {
//     console.log(" Not eligible to vote")
// }

//15.Using isLoggedIn and isAdmin, build a nested condition — if logged in and admin, print "Admin Dashboard"; if logged in but not admin, print "User Dashboard"; if not logged in, print "Please Login".

// let isLoggedIn=true;
// let isAdmin=true;
// if(isLoggedIn && isAdmin){
//     console.log("Admin Dashboard")
// }
// else if(isLoggedIn && !isAdmin){
//     console.log("User Dashboard")
// }
// else{
//     console.log("Please Login")
// }

//16.Determine whether a number is even or odd using the ternary operator.

// let number=20;
// let result=number % 2===0 ? "even" : "odd";
// console.log(result)

//17. Using age, determine "Adult" or "Minor" using the ternary operator.

// let age=20;
// console.log(age >18 ? "Adult": "Minor")

//18. If the price is greater than 1000, print "Expensive", otherwise "Affordable" — write this using a ternary operator.

// let price=1001;
// console.log(price >1000 ? "Expensive": "Affordable")

//19.Using hasPermission, use the ! operator to print "Access Denied" if permission is not granted.
// let hasPermission=!true;
//  console.log(!hasPermission ? "Access Denied": "Not granted")

//20.Using isOnline, use the NOT operator to print "User is offline".

// let isOnline = false;
// console.log(!isOnline ? "User is offline" : "User is online");

//21.Build a simple discount system: if cart total is above 1000 AND the user is a member, apply a 20% discount; if only above 1000, apply a 10% discount; otherwise, no discount — use logical operators combined with if-else if.

// let total=1000;
// let member=true;
// if(total>1000 && member){
//     console.log("apply a 20% discount")
// }
// else if(total>1000 && !member){
//      console.log("apply a 10% discount")
// }
// else{
//      console.log("no discount")
// }

//22.Build a simple login + role-check system that verifies username/password and shows a different message based on admin/user role — combine everything from this module (comparison, logical operators, if-else, ternary).

// let username = "admin";
// let password = "12345";
// let role = "admin";

// if (username === "admin" && password === "12345") {
//     console.log("Login successful");

//     let message = role === "admin" ? "Welcome Admin" : "Welcome User";

//     console.log(message);

// } else {
//     console.log("Invalid username or password");
// }


//Module 9: Fundamental Concepts of Loops

//1.Task 1 — Print "Hello" Five Times.

// for(i=0; i<5; i++){
//     console.log("Hello")
// }

//2.Task 2 — Print Numbers 1 to 10 .

// for(let i=1; i<=10; i++){
//     console.log(i)
// }

//3.Task 3 — Countdown with While Loop .

// let i=10;
// while(i>=1){
//     console.log(i)
//     i--
// }

//4.Task 4 — Repeat a Message 
// Using a while loop, print "Loop চলছে" exactly 7 times.

// let i=1;
// while(i<=7){
//     console.log('Loop চলছে')
//     i++
// }

//5.Write a for loop that prints all even numbers between 1 and 30.

// let i=30;
// for(i=1; i<=30; i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }

//6.Task 6 — Sum of Numbers 
// Write a for loop that calculates the sum of numbers from 1 to 20 and prints the result.

// let sum=0;
// for(let i=1; i<=20; i++){
//   sum=sum+i;
// }
//   console.log(sum)

//7.Task 7 — Multiplication Table 
// Ask the user for a number (or set a variable), then print its multiplication table from 1 to 10 using a for loop. Example: if the number is 7 → 7 x 1 = 7, 7 x 2 = 14, ... 7 x 10 = 70.
// let number=7;
// for(let i=1; i<=10; i++){
//    let mul=i*number;
//     console.log(number,"X",i,"=",mul)
// }

//8.Task 8 — Count Down from 20 
// Write a for loop that counts down from 20 to 1.

// for(let i=20; i>=1; i--){
//     console.log(i)
// }

//9.Task 9 — Sum of Even Numbers
// Write a for loop that calculates the sum of all even numbers from 2 to 50.

// let sum=0;
// for(let i=1; i<=50; i++){
//     if(i%2===0){
//          sum=sum+i;
//     }
// }
//  console.log(sum)

//10.Task 10 — Using Break 
// Write a for loop from 1 to 50 that stops completely (break) as soon as it reaches a number greater than 30

// for(let i=1; i<=50; i++){
//     if(i>30){
//         break
//     }
//     console.log(i)
// }

//11.Task 11 — Using Continue 
// Write a for loop from 1 to 20 that skips (continue) any number divisible by 4.

// for(let i=1; i<=20; i++){
//     if(i%4==0){
//         continue
//     }
//     console.log(i)
// }

//12.Task 12 — Do While Loop — Optional 
// Write a do while loop that prints numbers from 1 to 5. Then modify the condition so it is false from the start (for example, i > 10) and observe that the loop still runs once.

// let i = 1;
// do {
//     console.log(i)
//     i++
// } while (i <= 5)

// let j = 1;
// do {
//     console.log(j)
//     j++
// } while (j > 10)

//13.Task 13 — Comparing Loop Types
// Write the same task — printing numbers 1 to 5 — three times: once using for, once using while, and once using do while. Compare how the code structure differs for each.

// for(let i=1; i<=5; i++){
//     console.log(i)
// }
// //...................
// let j=1;
// while(j<=5){
//     console.log(j)
//     j++
// }
// //........................
// let k=1;
// do{
//     console.log(k)
//     k++
// }while(k<=5)

//15.Task 14 — Mini Challenge 
// Write a program that:
// Loops from 1 to 100.
// Skips (continue) any number divisible by 5.
// Stops (break) completely once it reaches a number greater than 40.
// Prints every number that passes both checks.
//  for(let i=1; i<=100; i++){
//     if(i>40){
//       break;
//     }
//     if(i%5===0){
//         continue
//     }
//     console.log(i)
//  }


                                            