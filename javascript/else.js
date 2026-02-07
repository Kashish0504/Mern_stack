//let age = prompt ("entero of you'r age")


 //above 60 

 //let value = age >=  18 ? console;
// log('adult') : console.log('kid');


//if (age >= 18 && age < 69) {
    //block of code 
   // console.log('adult');

//} else if (age > 60  ){ 
    //console.log('old');

//} else {
    //block of code 
    //console.log('kid');
//}



// 1. Even or Odd
let n = 5;
console.log(n % 2 === 0 ? "Even" : "Odd");

// 2. Positive, Negative, or Zero
let num = -3;
console.log(num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero");

// 3. Greater between two numbers
let a = 10, b = 20;
console.log(a > b ? a : b);

// 4. Largest among three numbers
let x = 5, y = 12, z = 9;
console.log(Math.max(x, y, z));

// 5. Leap year
let year = 2024;
console.log((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? "Leap Year" : "Not Leap Year");

// 6. Grade based on score
let score = 85;
if (score >= 90) console.log("A");
else if (score >= 80) console.log("B");
else if (score >= 70) console.log("C");
else if (score >= 60) console.log("D");
else console.log("F");

// 7. Categorize by age
let age = 25;
if (age <= 12) console.log("Child");
else if (age <= 19) console.log("Teen");
else if (age <= 59) console.log("Adult");
else console.log("Senior");

// 8. Vowel or Consonant
let ch = 'a';
console.log("aeiouAEIOU".includes(ch) ? "Vowel" : "Consonant");

// 9. Divisible by 3 and 5
let number = 15;
console.log(number % 3 === 0 && number % 5 === 0 ? "Divisible by 3 and 5" : "Not Divisible");

// 10. Temperature check
let temp = 18;
if (temp <= 10) console.log("Cold");
else if (temp <= 25) console.log("Pleasant");
else console.log("Hot");




