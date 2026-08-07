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

//********************************Module-10-practice-tasks**************************************** */  

//********************************Beginner**************************************** */  

//1.1. Create an array with 3 items of your choice. Log it.
// Expected: array with your 3 items printed

// let array=[1,2,3];
// console.log(array)

//2.2. Log the length of the array from Task 1.
// Expected: 3

// let array=[3,5,8];
// let a=array.length;
// console.log(a)


//3.. Log the item at index 0 and index 2 of the array.

// let array=[4,9,7,5,3,1,6];
// console.log(array[0])
// console.log(array[2])

//4. Change the item at index 1 to a new value. Log the array.

// let array=[2,3,4,5,6,7,8];
// array[1]=20;
// console.log(array)

//5. Add one item to the end of the array. Log the array.

// let array=[2,4,6,7];
// array.push(23)
// console.log(array)

//6. Remove the last item from the array. Log the array and the removed value.

// let array=[23,43,656,78,90];
// let removed=array.pop();
// console.log(removed)
// console.log(array)

//7. Add one item to the start of the array. Log the array.

// let array=[22,33,44,5,7];
// let add=array.unshift(222)
// console.log(array)
// console.log(add)

//8. Remove the first item from the array. Log the array and the removed value.

// let array=[22,33,44,5,7];
// let removed=array.shift(222)
// console.log(array)
// console.log(removed)

//9. Check whether the array contains a specific value. Log true or false.

// let array=[22,333,44,55,66];
// if(array.includes(333)){
//     console.log("true")
// }else{
//     console.log("false")
// }

//10. Find the position of a specific value in the array. Log the number.
// let array=[22,33,44,5,7];
// let indexnumber=array.indexOf(33);
// console.log(indexnumber)

//11. Loop through the array with a for loop and log each item.

// let array=[22,33,44,5,7];
// for(let i=0;i<array.length;i++){
//     console.log(array[i])
// }

//12.Loop through the array with a while loop and log each item.

// let array=[22,33,44,5,7];
// let i=0;
// while(i<array.length){
//     console.log(array[i])
//     i++
// }

//********************************Intermediate**************************************** */

//1.Combine two arrays into one new array. Log the result.

// let array1=[2,3,4,5,6];
// let array2=[7,8,9,0];
// let totalarray=array1.concat(array2);
// console.log(totalarray)

//2. Take a portion of an array (not the whole thing) without changing the original. Log the result.

// let array=[22,33,44,5,7];
// let result=array.slice(1,3);
// console.log(result)

//3. Turn an array of words into a single sentence string.
// Expected: a string like "word word word"

// let array=["word","word","word"]
// let sentance=array.join(" ")
// console.log(sentance)

// 4. Check two variables (one array, one not) and log whether each is an array.
// Expected: true then false, or false then true depending on order


// let arr = [10, 20, 30];
// let name = "Mizu";
// console.log(Array.isArray(arr));
// console.log(Array.isArray(name));

//  ..................=>
//****************************************************************************************** */
// function sum1(a,b){
//     const sum=a+b;
//     return sum;
// }
//  const total1=sum1(5,6);

// console.log("..............................")

// function sum2(a,b){
//     const sum=a+b;
//     return sum;
// }
//  const total2=sum2(5,6);


//  console.log("..............................")

//  function add(a,b){
//     const intotal=a+b;
//     return intotal;
// }
//  const alltotal1=add(total1,total2);
//  console.log(alltotal1)

//****************************************************************************************** */

//5.Reverse an array of at least 5 items. Log the result.

// let array=[3,5,6,7,8,9];
// array.reverse();
// console.log(array)

//6.Sort an array of names alphabetically. Log the result.

// let array= ["Aahid", "Csif", "Nayeem", "Fahim", "Dakib"];
// array.sort();
// console.log(array)

//7. Sort an array of numbers in ascending order, keeping numeric order correct (not string order).

// let array = [7, 8, 5, 4, 9, 2, 0, 1, 3];
// array.sort((a,b) => a-b);
// console.log(array)

//8. Given an array of numbers, log only the values greater than 10, using a loop.

// let numbers=[2,44,55,66,8,9,7];
// for(let i=0; i<numbers.length; i++){
//     if(numbers[i]>10){
//         console.log(numbers[i])
//     }
// }
//**********************************/
// let numbers = [2,44,55,66,8,9,7];
// for(const num of numbers){
//     if(num > 10){
//         console.log(num);
//     }
// }
//**********************************/

// //9. Given an array of numbers, calculate and log the total sum, using a loop.

// let numbers=[3,5,6,7,8,9,76,44,33,2];
// let sum=0;
// for(let i=0; i<numbers.length; i++){
//     sum=sum+numbers[i];
// }
// console.log(sum)

//********************************Advanced**************************************** */

//1. Given an array of numbers, remove duplicates and log the unique values only.
// const numbers = [5, 2, 8, 5, 3, 2, 8, 10, 3];
// const uniqueNumbers = [];
// for (const num of numbers) {
//     if (!uniqueNumbers.includes(num)) {
//         uniqueNumbers.push(num);
//     }
// }
// console.log(uniqueNumbers);

//2.Given an array of mixed values (numbers and strings), separate them into two arrays and log both.

// let array=[3,4,5,6,7,"mizu","jim","amena",6,3,"mishu","mozaffor"];
// let numbers=[];
// let strings=[];
// for(let i=0; i<array.length;i++){
//     if(typeof array[i]==="number"){
//         numbers.push(array[i]);
//     }
//     else if(typeof array[i]==="string"){
//         strings.push(array[i]);
//     }
// }
// console.log(numbers)
// console.log(strings)

//3.Given an array of numbers, find the largest and smallest value without using Math.max or Math.min directly on the whole array (use a loop).

// let array=[2,3,4,9,6,7,8,9];
// let max=array[0];
// let min=array[0];
// for(let i=0;i<array.length;i++){
//     if(array[i]>max){
//          max=array[i]
// }
// else if(array[i]<min){
//     min=array[i]
// }
// }
// console.log(max)
// console.log(min)

//4.Flatten a nested array (array containing arrays) into a single flat array.
// Expected: [1,2,3,4,5,6] from something like [1,[2,3],[4,[5,6]]]

// let array=[1, [2, 3], [4, [5, 6]]];
// let final=array.flat(2)
// let array1=array.flat();
// let array2=array1.flat();
// console.log(array1)
// console.log(array2)
// console.log(".........................................")
// console.log(final)

//5.Rotate an array left by one position (first item moves to the end). Log the result.
// Expected: [2,3,4,5,1] from [1,2,3,4,5]
// let array=[1,2,3,4,5,6,7,8,9];
// let rotate=array.shift();
// console.log(rotate)
// let last=array.push(rotate)
// console.log(last)
// console.log(array)


//  let str="I Love Bangladesh";
// let vawels="aeiou";
// let count=0;
// for(i=0;i<str.length;i++){
//    let letter=str[i];
//    console.log(i,letter)
//    if(vawels.includes(letter)){
//     console.log("vowels")
//     count++
//    }
// }
// console.log("===>",count)



//********************************Fundamentals of Strings & Objects**************************************** */

//1.Spot the Difference
// let str = "hello";
// let arr = ["h", "e", "l", "l", "o"];

// str=str.length;
// arr=arr.length;
// console.log(str,arr)

// str=str[0];
// arr=arr[0];
// console.log(str,arr)
// str.push("!");
// console.log(str)

//2. Convert Between Them 
// let array="JavaScript";
// let strArray=array.split("");
// console.log(strArray)

// let str= ["c", "a", "t"] ;
// let srt1=str.join("");
// console.log(srt1)

//3. Case Conversion

// let name =  "   hi there   ";
// // let ubdate = name.toUpperCase();
// // let smalltext=name.toLowerCase();
// // console.log(smalltext)  
//  let b=name.trim();
//  console.log(b)

//4. Slicing Strings

// let sentence = "Learning JavaScript is fun!";

// let final=sentence.slice(0,8);
// // let final2=sentence.slice(-4)
// console.log(final,final2)

//5. Combine Strings

//  let text1="Hello";
//   let text2= "World";
//    let final=text1.concat(" ",text2)
//     let final2=text1 +" "+ text2;
//     let final3=`${text1} ${text2}`
//    console.log(final,final2,final3)




//********************************Module 16 — ES6 Practice Tasks**************************************** */

//1.Scope Detective
// function describeDeclaration(keyword) {
//     if (keyword === "var") {
//         return "Can redeclare, can reassign";
//     } else if (keyword === "let") {
//         return "Cannot redeclare, can reassign";
//     } else if (keyword === "const") {
//         return "Cannot redeclare, cannot reassign";
//     } else {
//         return "Invalid";
//     }
// }

// console.log(describeDeclaration("let"));
// console.log(describeDeclaration("const"));
// console.log(describeDeclaration("var"));
// console.log(describeDeclaration("int"));

//2.Movie Ticket Booking

// function bookTicket(movie, seats = 1, pricePerSeat = 300) {
//     if (
//         typeof movie !== "string" ||
//         typeof seats !== "number" ||
//         typeof pricePerSeat !== "number" ||
//         seats < 0 ||
//         pricePerSeat < 0
//     ) {
//         return "Invalid";
//     }
//     const total = seats * pricePerSeat;
//     return `${movie}: ${seats} seat(s), Total ৳${total}`;
// }
// console.log(bookTicket("Dune"));
// // Dune: 1 seat(s), Total ৳300

// console.log(bookTicket("Dune", 3));
// // Dune: 3 seat(s), Total ৳900

// console.log(bookTicket("Dune", 2, 450));
// // Dune: 2 seat(s), Total ৳900

// console.log(bookTicket(123, 2));
// // Invalid

//3.Receipt Generator

// function generateReceipt (customerName,items ,total ){
//   if (!Array.isArray(items) || items.length ===0){
//          return "Invalid"
//   }
//   else{
//       return `Receipt for ${customerName}
// Items: ${items.join(", ")}
// Total: ৳${total}`;

//   }
// }

// console.log(generateReceipt("Rakib", ["Pen","Book"], 150))
// console.log(generateReceipt("Sadia", ["Milk"], 60))
// console.log(generateReceipt("Tanvir", [], 0))

//4.

//  const calculateBMI = (Weight ,Height ) => {
//      if(Weight<=0 || Height <=0 ){
//           return "Invalid"
//      }
//      else{
//        let  BMI = Weight / (Height * Height);
  
//      return Number(BMI.toFixed(2))
//      }
    
// }
// console.log(calculateBMI(70, 1.75))
// console.log(calculateBMI(60, -1.7))

//5.Inventory Merge & Max Score

// function mergeInventory(arr1, arr2){
//   if(!Array.isArray(arr1 )|| !Array.isArray(arr2)){
//    return "Invalid"
//   }
//   else{
//     let final=[...arr1,...arr2]
//     return final
//   }
// }
// console.log(mergeInventory([1,2],[3,4]))
// console.log(mergeInventory([], [1,2]))
// console.log(mergeInventory("abc", [1,2]))
// console.log(mergeInventory([1,2], {}))


// function highestScore (scores){
//   if(!Array.isArray(scores)){
//    return "Invalid"
//   }
//  let  highestScore = Math.max(...scores) 
//  return highestScore
// }

// console.log(highestScore([3,7,2,9,4,88]))
// console.log(highestScore(("3,7,2")))

//6.User Profile Extractor

// function extractUserInfo(userObj ){

//        const {user, hobbies}=userObj
//          const{name, age} = user
//     const [firstHobby = "nothing yet"] =hobbies
//     if( !user.name){
//          return "Invalid"
//     }
 
//       return `${name} (${age}) likes ${firstHobby}`;
// }

// console.log(
//   extractUserInfo({
//     user: { name: "Sadia", age: 22 },
//     hobbies: ["reading", "coding"]
//   })
// );

// console.log(
//   extractUserInfo({
//     user: { name: "Rafi", age: 19 },
//     hobbies: []
//   })
// );

// console.log(
//   extractUserInfo({
//     user: { age: 30 },
//     hobbies: []
//   })
// );

//7.Inventory Object Manager

// function manageInventoryObject(obj, action){
//   if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
//         return "Invalid";
//     }

//     // Keys
//     if (action === "keys") {
//         return Object.keys(obj);
//     }

//     // Values
//     if (action === "values") {
//         return Object.values(obj);
//     }

//     // Entries
//     if (action === "entries") {
//         return Object.entries(obj);
//     }

//     // Delete property
//     if (action.includes("delete:")){
//         let prop=action.slice(7)
//            delete obj[prop];
//          return obj;
//     }

//     // Seal object
//     if (action === "seal") {
//         return Object.seal(obj);
//     }

//     // Freeze object
//     if (action === "freeze") {
//         return Object.freeze(obj);
//     }
//     return "Invalid";
// }







// console.log(manageInventoryObject({a:1,b:2,c:3}, "keys"));
// // ['a','b','c']

// console.log(manageInventoryObject({a:1,b:2,c:3}, "values"));
// // [1,2,3]

// console.log(manageInventoryObject({a:1,b:2,c:3}, "entries"));
// // [['a',1],['b',2],['c',3]]

// console.log(manageInventoryObject({a:1,b:2,c:3}, "delete:c"));
// // {a:1,b:2}

// console.log(manageInventoryObject({a:1}, "shrink"));

//8.Object Looper
 
//  function printObjectDetails(obj, loopType){
//      let result=[];
//      if(loopType==="forin"){
//         for(let key in obj){
//             result.push(`${key}:${obj[key]}`)
//         }
//         return result
//      }
//      if(loopType==="forofentries"){
//         for( let [key,value] of Object.entries(obj)){
//             result.push(`${key}:${value}`)
//         }
//         return result
//      }
//      if(loopType==="entriesDestructure"){
//       return Object.entries(obj).map(([key, value])=>{
//         return `${key}: ${value}`;
//         });
        
//      }
//      return "Invalid"
//  }

// console.log(printObjectDetails({fruit:"Mango",price:50}, "forin"))

//9.ES6 Refactor Challenge

// var calculateTotal = function(items) { 
//   const total=items.reduce((sum,item)=>sum + item.price,0)
//   return `Total:${total} Taka`
// };

// console.log(calculateTotal([{price:100},{price:250}]))
// console.log(calculateTotal([{price:80}]))


//** *****************************************************  MODIUL 17*************************************************************** */

//1.CLOUSER

// function resturented(){
//     let sum=0;
//     return function(a,b){
//         sum=sum+a+b;
//         return sum;
//     }
// }

// let resturentedcashcounter=resturented();
// let cofecashcountercashcounter=resturented();
// console.log("Restaurant Total:", resturentedcashcounter(20,30))
// console.log("Restaurant Total:", resturentedcashcounter(27,30))
// console.log("Restaurant Total:", resturentedcashcounter(2,3))
// console.log("Restaurant Total:", resturentedcashcounter(27,9930))

// console.log("Cafe Total:",cofecashcountercashcounter(2,3))
// console.log("Cafe Total:",cofecashcountercashcounter(27,9930))

//2.CALLBACK FUNCITON

// function callbackadd(a,b,cb){
//     let sum=a+b;
//    cb(sum)
// }
// function dis(result){
//    console.log(result)
// }
// callbackadd(5,6,dis)

//3.PASS BY VALUE

// let name="mizu";
// function myname(c){
//    c="jim";
//     console.log(c)
// }
// myname(name)
// console.log(name)

//4.PASS BT REFERRENCE

// let student={name:"mizu", roll:32}
// function myname(data){
//     data.name="jim"
//     console.log(data)
// }
// myname(student)
// console.log(student)

//**************************************************************************************************************************************** */
//******************************************************CLASS KORA DISA AI GULA  MODIUL 18************************************************ */
//**************************************************************************************************************************************** */
//**************************************************************************************************************************************** */
//******************************************************CLASS KORA DISA AI GULA  MODIUL 18************************************************ */
//**************************************************************************************************************************************** */

//******************************************************** */
/*
  Problem 1: Fix the Scope Bug
  Rewrite using let to fix the output.
*/

// let status = "Order Placed";

// for (var i = 1; i <= 3; i++) {
//   let status = "Processing Item " + i;
//   // console.log(status);
// }

// // console.log("Final Status:", status);

// /*
//   Problem 2: Receipt Generator (Template Strings)
//   Build a receipt generator using template strings — take item name,
//   price, qty as input, output formatted multiline receipt.

//   Example: Input ("Pen", 20, 3) -> Output "Pen x3 = 60 Taka"
// */

// function receiptGenerator(name, price, qty) {
//   // console.log(name, price, qty);

//   // return name + " x" + qty + " = " + price * qty + " Taka";
//   return `${name} x${qty} = ${price * qty} Taka`
// }

// console.log(receiptGenerator("Pen", 20, 3));
// console.log(receiptGenerator("Eraser", 15, 2));
//***************************************************************************************************************** */
/*
  Problem 1: Flexible Total Calculator
  calculateTotal(...prices) using rest params, sums any number of
  prices.

  Example: calculateTotal(0, 100, 200, 300) -> 600
  Example: calculateTotal(10, 100, 200) -> 270   (10 = discount%)
*/

// Simple rule: discount is ALWAYS the first argument.

// function calculateTotal(discount, ...prices) {
//   console.log(discount, prices);
//   // let total  = 0;
//   // for(let i = 0; i<prices.length; i++){
//   //   total+= prices[i]
//   // }
//   let total = prices.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     0,
//   );
//   let discountAmount = (total * discount) / 100;
//   console.log(discountAmount);
//   let totalAfterDiscountApply = total - discountAmount;
//   return totalAfterDiscountApply;
// }

// // console.log(calculateTotal(10, 100, 200, 50, 300));

// /*
//   Problem 2: Merge & Deduplicate Arrays
//   Merge two arrays and remove duplicates using spread + Set.

//   Example: [1,2,3] + [2,3,4] -> [1,2,3,4]
// */

// let arr1 = [10, 20, 30, 40, 50];
// let arr2 = [50, 60, 20, 90];

// let mergedArr = [...arr1, ...arr2];
// console.log(mergedArr);

// // let newArr = [...new Set(mergedArr)];
// let newArr = Array.from(new Set(mergedArr));

// console.log(newArr);
//**************************************************************************** */
/*
  Problem 1: Arrow Function with Default Parameters & Logic
  Write an arrow function that calculates shipping cost based on
  order amount. Free shipping if amount >= 1000, otherwise charge
  a default fee 60 taka.

  Example: calculateShipping(1200) -> "Free Shipping"
  Example: calculateShipping(500) -> "Shipping Fee: 60 Taka"
  Example: calculateShipping(500, 100) -> "Shipping Fee: 100 Taka"
*/

// const calculateShipping = (orderAmount, shippingFee = 60) => {
//   // if(orderAmount>=1000){
//   //   return "Free Shipping"
//   // } else{
//   //   return `Shipping Fee: ${shippingFee} Taka`
//   // }

//   // condition ? true : false
//   return orderAmount >= 1000
//     ? "Free Shipping"
//     : `Shipping Fee: ${shippingFee} Taka`;
// };
// // console.log(calculateShipping(1200));
// // console.log(calculateShipping(500));
// // console.log(calculateShipping(500, 100));

// /*
//   Problem 2: Arrow Function with Multiple Conditions
//   Write an arrow function that assigns a grade based on marks.
//   90+ -> "A+", 80-89 -> "A", 60-79 -> "B", below 60 -> "Fail"
//   Rules: if not number -> return invalid

//   Example: getGrade(95) -> "A+"
//   Example: getGrade(82) -> "A"
//   Example: getGrade(45) -> "Fail"
// */

// const getGrade = (mark) => {
//   // if (typeof mark != "number") {
//   //   return "Invalid";
//   // }

//   // if (mark >= 90) {
//   //   return "A+";
//   // } else if (mark >= 80) {
//   //   return "A";
//   // } else if (mark >= 60) {
//   //   return "B+";
//   // } else {
//   //   return "Fail";
//   // }

//   // Ternary operator -> condition ? true : false
// // Nested operator
//   return typeof mark!= "number" ? "Invalid" : mark >= 90 ? "A+" : mark>=80 ? "A" : mark>= 60 ? "B+" : "Fail"
// };
// console.log(getGrade(95));
// console.log(getGrade(82));
// console.log(getGrade(45));
// console.log(getGrade("Utsho"));
// console.log(getGrade([]));

// //***************************************************************** */

// /*
//   Problem 1: Nested Response Extractor
//   Extract specific fields from a nested API-like response object using
//   destructuring, with renaming + default value.

//   Example: { user: { name: "Rafi", age: 22 } } -> extract name as
//   userName, default age = 18 if missing
// */

// const responseExtractor = (obj) => {
//   const {
//     user: { name: userName, age = 18 },
//   } = obj;
//   // console.log(userName, age);
//   return {
//     userName,
//     age,
//   };
// };
// console.log(responseExtractor({ user: { name: "Rafi", age: 22 } }));
// console.log(responseExtractor({ user: { name: "Rafi", age: 25 } }));
// console.log(responseExtractor({ user: { name: "Nishat" } }));

// /*
//   Problem 2: Swap & Rest Extractor
//   Swap two variables and extract first/rest elements from an array
//   using destructuring, no temp variable.

//   Example: [a, b] = [b, a]
//   Example: [first, ...rest] = [10,20,30,40] -> first=10, rest=[20,30,40]
// */

// let a = 5;
// let b = 10;
// [b, a] = [a, b];

// // console.log(a, b);

// let nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// let [first, second, ...rest ] = nums
// console.log(first, second, rest);


// //************************************************************* */

// /*
//   Problem 1: Most Expensive Product
//   Given an object of product prices, use Object.keys() or Object.entries() + loop to
//   find the most expensive product.

//   Example: { pen: 20, book: 150, bag: 500 } -> "bag"
// */

// const getMostExpensiveProduct = (product) => {
//   const keys = Object.keys(product);
//   let highest = 0;
//   let expensiveProductName = "";

//   // console.log(keys);
//   for (let key of keys) {
//     if (highest < product[key]) {
//       highest = product[key];
//       expensiveProductName = key;
//     }
//     // console.log(key, product[key]);
//   }

//   // console.log(highest, expensiveProductName);
//   return expensiveProductName;
// };

// // console.log(getMostExpensiveProduct({ pen: 20, book: 150, bag: 500, bat: 750, laptop: 30000, desktop: 70000 }));

// /*
//   Problem 2: Safe Nested Access
//   Safely access deeply nested optional data using ?. and ?? without
//   throwing errors.

//   Example: user?.address?.city ?? "City not found" when address is undefined
// */

// let user1 = {
//   name: "Akash",
//   address: {
//     city: "Comilla",
//   },
// };
// let user2 = {
//   name: "Robin",
//   // address: {},
// };

// const getCity = (user) => {
//   return user.address?.city;
// };

// console.log(getCity(user1));
// console.log(getCity(user2));

// //***************************************************************************** */

// /*
//   Problem 1: Add Grade to Each Student (Without Changing Original)
  
//   You have an array of student objects, each with name and marks.
//   Create a NEW array where every student also has a "grade" field,
//   based on their marks. The ORIGINAL array must stay exactly the same.

//   Grading rule:
//     marks >= 90 -> "A+"
//     marks >= 80 -> "A"
//     marks >= 60 -> "B"
//     below 60    -> "Fail"

//   Input:
//     [
//       { name: "Rafi", marks: 85 },
//       { name: "Karim", marks: 45 }
//     ]

//   Output (new array):
//     [
//       { name: "Rafi", marks: 85, grade: "A" },
//       { name: "Karim", marks: 45, grade: "Fail" }
//     ]

//   Original array must remain untouched (no "grade" field added to it).
// */

// const addGrade = (students) => {
//   const getGrade = (marks) => {
//     if (marks >= 90) {
//       return "A+";
//     } else if (marks >= 80) {
//       return "A";
//     } else if (marks >= 60) {
//       return "B";
//     } else {
//       return "Fail";
//     }
//   };

//   const modifiedStudents = students.map((student) => {
//     const { name, marks } = student;

//     const newStudentWithGrade = { name, marks, grade: getGrade(marks) };

//     return newStudentWithGrade;
//   });

//   return modifiedStudents;
// };

// let students = [
//   { name: "Rafi", marks: 85 },
//   { name: "Karim", marks: 45 },
//   { name: "Utsho", marks: 95 },
//   { name: "Akash", marks: 65 },
// ];

// // console.log(addGrade(students));
// // console.log(students);







// /*
//   Problem 2: Cart Total Calculator
  
//   You have an array of cart items, each with a name, price, and qty
//   (quantity). Calculate:
//     1. Total number of items in the cart (sum of all qty)
//     2. Total cost (sum of price x qty for each item)

//   Then print one final message using a template string:
//     "Total: X items, Y Taka"

// //   Input:
// //     [
// //       { name: "Pen", price: 100, qty: 1 },
// //       { name: "Notebook", price: 100, qty: 2 }
// //     ]

// //   Output:
// //     "Total: 3 items, 300 Taka"

// //   Bonus: if the cart is missing (null/undefined), don't crash —
// //   print "Total: 0 items, 0 Taka" instead.
// // */

// const cartCalculator = (products) => {
//   let totalItems = 0;
//   let totalPrice = 0;

// for(const product of products){
//   const  { price, qty }=product
//   // let totalqty=totalItems+qty
//   totalItems=totalItems + qty
//  totalPrice= totalPrice + price * qty
// }
//  return `Total: ${totalItems || 0} items, ${totalPrice || 0} Taka`;
// console.log(totalPrice)
// console.log(totalItems)

//   // for (let product of products) {
//   //   const { price, qty } = product;

//   //   // totalItems = totalItems + product.qty
//   //   totalItems += qty;

//   //   totalPrice = totalPrice + price * qty;
//   // }


//   // console.log(totalItems, totalPrice);

//   // return `Total: ${totalItems || 0} items, ${totalPrice || 0} Taka`;
// };

// const products = [
//   { name: "Pen", price: 100, qty: 1 },
//   { name: "Notebook", price: 100, qty: 2 },
//   { name: "Headphone", price: 500, qty: 1 },
  
// ];

// console.log(cartCalculator(products));
// console.log(cartCalculator([]));


//**************************************************************************************************************************************** */
//******************************************************CLASS KORA DISA AI GULA  MODIUL 18************************************************ */
//**************************************************************************************************************************************** */
//**************************************************************************************************************************************** */
//******************************************************CLASS KORA DISA AI GULA  MODIUL 18************************************************ */
//**************************************************************************************************************************************** */

//***********************************Module 18 — Practice Tasks **************************************** */

//Task 1: calculateBill(amount, taxRate = 0.05) — Default Parameters 
// Return the final bill after tax is applied. Default tax rate is 5% when not provided.
// Input:  
// calculateBill(1000)
// Output: 
// 1050
// Input:  
// calculateBill(1000, 0.10)
// Output: 
// 1100

// const calculateBill =(amount, taxRate = 0.05)=>{
//       let tax=amount*taxRate
//       return amount + tax;
// }
// console.log(calculateBill(1000))
// console.log(calculateBill(1000, 0.10))

//Task 2: buildProfileCard(user) — Template Literals 
// Given { name, title, company }, return a multiline string using template literal interpolation only.

// Input:  
// { name: "Arif", title: "Developer", company: "Programming Hero" }
// Output: 
// "Arif\nDeveloper at Programming Hero"

// const buildProfileCard =(user)=>{
//   let  { name, title, company }=user
//   return `${name}
// ${title} at ${company}`;
// }
// console.log(buildProfileCard({ name: "Arif", title: "Developer", company: "Programming Hero" }))

//Task 3: getLowestPrice(prices) — Spread Operator 
// Given an array of numbers, return the lowest price using Math.min combined with spread (no manual loop).
// Input:  
// [340, 120, 560, 90]
// Output: 
// 90

// const getLowestPrice =(prices)=>{
//     let min=Math.min(...prices)
//     return min
// }

// console.log(getLowestPrice([340, 120, 560, 90]))


// //Task 4: swapValues(a, b) — Destructuring 
// // Return [b, a] using array destructuring assignment, no temporary variable.
// // Input:  
// // swapValues(5, 10)
// // Output:
// //  [10, 5]
//  const swapValues =(a, b)=>{
//   [b,a]=[a,b]
//   return[a,b]
//  }

//  console.log(swapValues(5, 10))

// Task 5: getEmployeeDept(employee) — Nested Destructuring 
// Given { name, job: { title, department } }, return { title, department } using nested destructuring.
// Input:  
// { name: "Nadia", job: { title: "PM", department: "Product" } }
// Output: 
// { title: "PM", department: "Product" }
//  const getEmployeeDept = (employee) =>{
//      let {name, job:{title,department}}=employee
//      return {title,department}
//  }

//  console.log(getEmployeeDept({ name: "Nadia", job: { title: "PM", department: "Product" } }))

// //Task 6: promoteEmployee(employee, newTitle) — Spread + Immutable Update 
// Return a NEW employee object with title updated to newTitle. Original object must remain unchanged.
// Input:  
// promoteEmployee({ name: "Rafi", title: "Junior Dev" }, "Senior Dev")
// Output: 
// { name: "Rafi", title: "Senior Dev" }
// (original object still has title: "Junior Dev")

// const promoteEmployee =(employee, newTitle)=>{
//   return {...employee,title:newTitle}
// }
// let employee= { name: "Rafi", title: "Junior Dev" }
//  console.log(promoteEmployee( employee,"Senior Dev"))

// console.log(employee)

// //Task 7: sumAllPrices(prices) — for...of 
// // Given an array of numbers, return their sum using for...of.
// // Input:  [100, 250, 75]
// // Output: 425

// const  sumAllPrices = (prices)=>{
//   let sum=0;
//   for(let key of prices){
//      sum = sum+ key
//   }
//   return sum
// }
// console.log(sumAllPrices([100, 250, 75]))

// //Task 8: getManagerName(employee) — Optional Chaining 
// Given an employee object that may or may not have a manager property, return the manager's name safely, or undefined if missing.
// Input:  { name: "Mim", manager: { name: "Tanvir" } }
// Output: "Tanvir"

// Input:  { name: "Rafi" }
// Output: undefined

// const getManagerName = (employee)=>{
//     // return employee.manager?.name;optional
//    let {name,manager}=employee
//    return manager?.name
// }

// console.log(getManagerName({ name: "Mim", manager: { name: "Tanvir" } }))
// console.log(getManagerName( { name: "Rafi" }))

//Task 9: splitFirstRest(arr) — Rest Syntax 
// Return { first, rest } where first is the first element and rest is an array of all remaining elements.
// Input:  [10, 20, 30, 40]
// Output: { first: 10, rest: [20, 30, 40] }

// const splitFirstRest = (arr)=>{
//    let [first, ...rest ]=arr
//   return {first,rest}
//     // return [first,rest]
// }

// console.log(splitFirstRest([10, 20, 30, 40]))

// // //Task 10:  cloneAndUpdate(arr, index, newValue) — Spread (Immutable Array 
// // Update) Return a new array with the value at index replaced by newValue, without mutating the original array.
// // Input:  cloneAndUpdate([5, 10, 15], 1, 99)
// // Output: [5, 99, 15]
// // (original array still [5, 10, 15])

// const cloneAndUpdate = (arr, index, newValue) =>{
//   let newarray=[...arr]
//      newarray[index]=newValue
//     return newarray
   
// }
// const array1=[5, 10, 15]
// console.log(cloneAndUpdate(array1, 1, 99))
// console.log(array1)

//*****************************************Module 19 — Practice Tasks******************************************* */

//Task 1: getFormattedPrices(prices) — map() 
// Given an array of numbers, return a new array where each price is formatted as a string prefixed with "$".
// Input: [100, 250, 75] 
// Output: ["$100", "$250", "$75"]

// const getFormattedPrices = (prices)=>{
//    let dolloradd=prices.map((elem)=>{
//          return `$${elem}`
//    })
//    return dolloradd
// }
// console.log(getFormattedPrices([100, 250, 75] ))
//******************//
//Task 2: getAvailableProducts(products) — filter() 
// Given an array of product objects { name, stock }, return only the products where stock is greater than 0.
// Input: 
// [{ name: "Pen", stock: 5 }, { name: "Bag", stock: 0 }, { name: "Notebook", stock: 2 }] 
// Output: 
// [{ name: "Pen", stock: 5 }, { name: "Notebook", stock: 2 }]


// const getAvailableProducts = (products)=>{
//   //  console.log(products)
//    let filterproduct=products.filter((products)=> products.stock >0)
//    return filterproduct
// }


// console.log(getAvailableProducts([{ name: "Pen", stock: 5 }, { name: "Bag", stock: 0 }, { name: "Notebook", stock: 2 }] ))

//Task 3: findProductByName(products, name) — find() 
// Given an array of product objects, return the first product matching the given name, or undefined if not found.
// Input: 
// products = [{ name: "Pen", price: 10 }, { name: "Bag", price: 500 }], name = "Bag" 
// Output: 
// { name: "Bag", price: 500 }

// const findProductByName = (products, name)=>{
//     //  console.log(products,name)
//      let findoutproduct=products.find(product=>product.name==name)
//      return findoutproduct
// }
// let products = [{ name: "Pen", price: 10 }, { name: "Bag", price: 500 }] ;
// let name = "Bag" ;
// console.log(findProductByName(products,name))
//**************************************** */
//Task 4: getTotalStockValue(products) — reduce() 
// Given an array of products { price, stock }, return the total value of all stock combined (price × stock, summed).
// Input:
//  [{ price: 50, stock: 4 }, { price: 20, stock: 10 }] 
// Output: 400

// const  getTotalStockValue = (products)=>{
//  let total=products.reduce((acamulator,current)=>{
//   // console.log(current)
//          let stockproduct= acamulator +(current.price * current.stock);
//          return stockproduct
//  },0)
//  return total
// }

// console.log(getTotalStockValue([{ price: 50, stock: 4 }, { price: 20, stock: 10 }] ))

//Task 5: getDiscountedTotalForCategory(products, category) — Chaining map + filter + reduce 
// Given an array of products { name, category, price }, return the total price of all products in the given category after applying a 10% discount to each.
// Input: 
// products = [{ name: "Pen", category: "stationery", price: 100 }, { name: "Bag", category: "accessory", price: 500 }, { name: "Notebook", category: "stationery", price: 60 }], category = "stationery" 
// Output: 144

// const getDiscountedTotalForCategory = (products, category)=>{
//     // console.log(products,category)
//     let filterpproduct=products.filter((product)=>{
//        return product.category==category
//     })
//     let productdiscount=filterpproduct.map((elem)=>{
//       return elem.price-((elem.price*10)/100)
//       // {
//       //   ...elem,
//       // price: elem.price-((elem.price*10)/100)//optional
//       // }
//     })
//     // console.log(productdiscount)//optional
//     let total=productdiscount.reduce((acumolator,current)=>{
//       // console.log(current)
//        return acumolator +current
//     },0)
//     return total
//     // {
//     //   total,productdiscount //optional
//     // }
//     // [total,productdiscount]//optional
// }

// let products = [{ name: "Pen", category: "stationery", price: 100 }, { name: "Bag", category: "accessory", price: 500 }, { name: "Notebook", category: "stationery", price: 60 }];
// let category = "stationery" 

// console.log(getDiscountedTotalForCategory(products,category))

//Task 6: createIdGenerator() — Closures 
// Return a function that generates a new sequential ID starting from 1 each time it is called, using an internal counter with no global variable.
// Input: 
// const nextId = createIdGenerator(); 
// nextId(); 
// nextId(); 
// nextId();

//  Output: 1, 2, 3

// const createIdGenerator = ()=>{
//   let count=0;
//   return (()=>{
//      count ++
//      return count
//   })
// }
// const nextId = createIdGenerator();
// console.log(nextId())
// console.log(nextId())
// console.log(nextId())
// console.log(nextId())
// console.log(nextId())

//