
/*

let num = 8

if(number %2 === 0){
    console.log( number is even);
    
}
let num = 3
if( number %2 === 0 ){
    console.log(number is odd);
    
}
// let num =
// if (number %2 === 0 ){
//     console.log( not eligible);
    
// }

*/




//postive or negativeor zero


/*

console.log("===== JavaScript Math Methods – Set of 20 =====\n");


// 1. Round up to nearest integer
let billing = 12.2;
console.log("1. Ceil:", Math.ceil(billing));


// 2. Round to nearest integer (.5 rounds up)
let dashboard = 4.5;
console.log("2. Round:", Math.round(dashboard));


// 3. Non-negative magnitude
let adjustment = -30;
console.log("3. Absolute:", Math.abs(adjustment));


// 4. Fair dice roll (1–6)
let dice = Math.floor(Math.random() * 6) + 1;
console.log("4. Dice Roll (1-6):", dice);


// 5. Random number 1–100
let random100 = Math.floor(Math.random() * 100) + 1;
console.log("5. Random (1-100):", random100);


// 6. Random valid index
let arr = ["Apple", "Banana", "Mango", "Orange"];
let randomIndex = Math.floor(Math.random() * arr.length);
console.log("6. Random Index:", randomIndex, "| Item:", arr[randomIndex]);


// 7. Highest score
let scores = [45, 88, 92, 67, 100];
console.log("7. Highest Score:", Math.max(...scores));


// 8. Lowest score
console.log("8. Lowest Score:", Math.min(...scores));


// 9. Clamp between 0–100
let userInput = 120;
let clamped = Math.max(0, Math.min(100, userInput));
console.log("9. Clamped (0-100):", clamped);


// 10. Keep larger value
let a = 10, b = 25;
console.log("10. Larger Value:", Math.max(a, b));


// 11. Distance formula
let x1 = 0, y1 = 0;
let x2 = 3, y2 = 4;
let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
console.log("11. Distance:", distance);


// 12. Hypotenuse
console.log("12. Hypotenuse:", Math.hypot(3, 4));


// 13. Vector magnitude
let vx = 6, vy = 8;
console.log("13. Vector Magnitude:", Math.hypot(vx, vy));


// 14. Floor (lower whole number)
let pageNumber = 5.9;
console.log("14. Floor Page:", Math.floor(pageNumber));


// 15. Truncate decimal
let fractional = 8.99;
console.log("15. Trunc:", Math.trunc(fractional));


// 16. Enforce maximum threshold
let value = 150;
console.log("16. Max Allowed 100:", Math.min(100, value));


// 17. Power (exponential growth)
console.log("17. 2^3:", Math.pow(2, 3));


// 18. Square root
console.log("18. Square Root of 49:", Math.sqrt(49));


// 19. Cube root
console.log("19. Cube Root of 27:", Math.cbrt(27));


// 20. Fair lottery number (10–20)
let min = 10;
let max = 20;
let lottery = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("20. Lottery (10-20):", lottery);











console.log("===== MAP PRACTICE =====");

// 1. Square numbers
let nums = [1, 2, 3, 4, 5];
console.log("1:", nums.map(n => n * n));

// 2. Length of names
let names = ["John", "Sneha", "Alex"];
console.log("2:", names.map(name => name.length));

// 3. Celsius to Fahrenheit
let celsius = [0, 20, 30];
console.log("3:", celsius.map(c => (c * 9/5) + 32));

// 4. Capitalize words
let words = ["hello", "world", "javascript"];
console.log("4:", words.map(w => w.toUpperCase()));

// 5. 10% discount
let prices = [100, 200, 300];
console.log("5:", prices.map(p => p * 0.9));

// 6. Word count in sentences
let sentences = ["Hello world", "I love JavaScript"];
console.log("6:", sentences.map(s => s.split(" ").length));

// 7. Even or Odd
console.log("7:", nums.map(n => n % 2 === 0 ? "Even" : "Odd"));

// 8. Initials
let fullNames = ["John Doe", "Sneha Gupta"];
console.log("8:", fullNames.map(name =>
  name.split(" ").map(n => n[0]).join("")
));

// 9. Extract year from date string
let dates = ["2024-01-01", "2023-12-25"];
console.log("9:", dates.map(d => d.split("-")[0]));

// 10. Absolute values
let numbers = [-5, 10, -15];
console.log("10:", numbers.map(n => Math.abs(n)));



console.log("\n===== FILTER PRACTICE =====");

// 1. Keep even numbers
console.log("1:", nums.filter(n => n % 2 === 0));

// 2. Greater than 50
let bigNums = [10, 60, 80, 40];
console.log("2:", bigNums.filter(n => n > 50));

// 3. Strings longer than 5
console.log("3:", words.filter(w => w.length > 5));

// 4. Names starting with vowel
let nameList = ["Anita", "Rahul", "Om", "Sneha"];
console.log("4:", nameList.filter(n =>
  /^[AEIOUaeiou]/.test(n)
));

// 5. Positive numbers
console.log("5:", numbers.filter(n => n > 0));

// 6. Valid emails
let emails = ["test@gmail.com", "invalidemail", "hello@yahoo.com"];
console.log("6:", emails.filter(e => e.includes("@")));

// 7. Palindromes
let wordList = ["madam", "hello", "racecar"];
console.log("7:", wordList.filter(w =>
  w === w.split("").reverse().join("")
));

// 8. Passed students
let students = [
  { name: "Aman", marks: 80 },
  { name: "Riya", marks: 40 }
];
console.log("8:", students.filter(s => s.marks >= 50));

// 9. Unique numbers
let duplicates = [1, 2, 2, 3, 4, 4];
console.log("9:", duplicates.filter((n, i, arr) =>
  arr.indexOf(n) === i
));

// 10. Completed tasks
let tasks = [
  { task: "Study", completed: true },
  { task: "Play", completed: false }
];
console.log("10:", tasks.filter(t => t.completed));



console.log("\n===== CHALLENGE (MAP + FILTER) =====");

// 1. Odd numbers → cube
console.log("1:", nums
  .filter(n => n % 2 !== 0)
  .map(n => n ** 3)
);

// 2. Words longer than 3 → uppercase
console.log("2:", words
  .filter(w => w.length > 3)
  .map(w => w.toUpperCase())
);

// 3. Prices above 100 → add 18% tax
console.log("3:", prices
  .filter(p => p > 100)
  .map(p => p * 1.18)
);

// 4. Names starting with A → first letter
console.log("4:", nameList
  .filter(n => n.startsWith("A"))
  .map(n => n[0])
);

// 5. Negative numbers → absolute values
console.log("5:", numbers
  .filter(n => n < 0)
  .map(n => Math.abs(n))
);











console.log("===== BASIC LOOP PRACTICE =====\n");

// 1. Print numbers from 1 to 10
console.log("1. Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}


// 2. Print all even numbers between 1 and 50
console.log("\n2. Even numbers (1-50):");
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


// 3. Print all odd numbers between 1 and 50
console.log("\n3. Odd numbers (1-50):");
for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}


// 4. Multiplication table of 5
console.log("\n4. Multiplication Table of 5:");
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}


// 5. Print numbers from 100 down to 1
console.log("\n5. Numbers from 100 to 1:");
for (let i = 100; i >= 1; i--) {
  console.log(i);
}


// 6. Sum of numbers from 1 to 100
console.log("\n6. Sum of numbers from 1 to 100:");
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum =", sum);


// 7. Square of first 10 natural numbers
console.log("\n7. Squares of first 10 natural numbers:");
for (let i = 1; i <= 10; i++) {
  console.log(`${i}^2 = ${i * i}`);
}


// 8. Cube of first 10 natural numbers
console.log("\n8. Cubes of first 10 natural numbers:");
for (let i = 1; i <= 10; i++) {
  console.log(`${i}^3 = ${i * i * i}`);
}


// 9. First 10 multiples of 3
console.log("\n9. First 10 multiples of 3:");
for (let i = 1; i <= 10; i++) {
  console.log(3 * i);
}


// 10. Factorial of a given number
console.log("\n10. Factorial:");
let num = 5; // change this number to test
let factorial = 1;

for (let i = 1; i <= num; i++) {
  factorial *= i;
}

console.log(`Factorial of ${num} = ${factorial}`);













console.log("===== INTERMEDIATE PRACTICE =====\n");


// 1. Reverse a number
let num1 = 123;
let reverse = 0;
let temp = num1;

while (temp > 0) {
  reverse = reverse * 10 + (temp % 10);
  temp = Math.floor(temp / 10);
}
console.log("1. Reverse:", reverse);


// 2. Sum of digits
let num2 = 432;
let sumDigits = 0;
temp = num2;

while (temp > 0) {
  sumDigits += temp % 10;
  temp = Math.floor(temp / 10);
}
console.log("2. Sum of digits:", sumDigits);


// 3. Prime check
let primeCheck = 17;
let isPrime = true;

if (primeCheck <= 1) isPrime = false;
for (let i = 2; i < primeCheck; i++) {
  if (primeCheck % i === 0) {
    isPrime = false;
    break;
  }
}
console.log("3. Is Prime:", isPrime);


// 4. Fibonacci sequence (first 10 terms)
console.log("4. Fibonacci:");
let n = 10;
let a = 0, b = 1;

for (let i = 1; i <= n; i++) {
  console.log(a);
  let next = a + b;
  a = b;
  b = next;
}


// 5. Divisible by 3 and 5 (1–200)
console.log("5. Divisible by 3 and 5:");
for (let i = 1; i <= 200; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}


// 6. Count digits
let num3 = 98765;
let count = 0;
temp = num3;

while (temp > 0) {
  count++;
  temp = Math.floor(temp / 10);
}
console.log("6. Digit Count:", count);


// 7. Palindrome check
let num4 = 121;
let original = num4;
reverse = 0;

while (num4 > 0) {
  reverse = reverse * 10 + (num4 % 10);
  num4 = Math.floor(num4 / 10);
}
console.log("7. Palindrome:", original === reverse);


// 8. Multiplication table (change number)
let tableNum = 7;
console.log("8. Table of", tableNum);
for (let i = 1; i <= 10; i++) {
  console.log(`${tableNum} x ${i} = ${tableNum * i}`);
}


// 9. Largest digit
let num5 = 58329;
let largest = 0;
temp = num5;

while (temp > 0) {
  let digit = temp % 10;
  if (digit > largest) largest = digit;
  temp = Math.floor(temp / 10);
}
console.log("9. Largest Digit:", largest);


// 10. Smallest digit
let smallest = 9;
temp = num5;

while (temp > 0) {
  let digit = temp % 10;
  if (digit < smallest) smallest = digit;
  temp = Math.floor(temp / 10);
}
console.log("10. Smallest Digit:", smallest);
*/

/*
console.log("\n===== ADVANCED PRACTICE =====\n");


// 1. Prime numbers 1–100
console.log("1. Prime Numbers (1-100):");
for (let i = 2; i <= 100; i++) {
  let prime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      prime = false;
      break;
    }
  }
  if (prime) console.log(i);
}


// 2. Sum of primes 1–200
let primeSum = 0;
for (let i = 2; i <= 200; i++) {
  let prime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      prime = false;
      break;
    }
  }
  if (prime) primeSum += i;
}
console.log("2. Sum of Primes (1-200):", primeSum);


// 3. Armstrong numbers 1–1000
console.log("3. Armstrong Numbers (1-1000):");
for (let i = 1; i <= 1000; i++) {
  let number = i;
  let digits = String(i).length;
  let sum = 0;
  let tempNum = i;

  while (tempNum > 0) {
    let digit = tempNum % 10;
    sum += digit ** digits;
    tempNum = Math.floor(tempNum / 10);
  }

  if (sum === number) console.log(i);
}


// 4. Palindrome numbers 1–500
console.log("4. Palindrome Numbers (1-500):");
for (let i = 1; i <= 500; i++) {
  let str = i.toString();
  if (str === str.split("").reverse().join("")) {
    console.log(i);
  }
}


// 5. Right-angled triangle
console.log("5. Right Triangle:");
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}


// 6. Pyramid pattern
console.log("6. Pyramid:");
for (let i = 1; i <= 5; i++) {
  console.log(" ".repeat(5 - i) + "*".repeat(2 * i - 1));
}


// 7. Diamond pattern
console.log("7. Diamond:");
for (let i = 1; i <= 5; i++) {
  console.log(" ".repeat(5 - i) + "*".repeat(2 * i - 1));
}
for (let i = 4; i >= 1; i--) {
  console.log(" ".repeat(5 - i) + "*".repeat(2 * i - 1));
}


// 8. Factors of a number
let factorNum = 12;
console.log("8. Factors of", factorNum);
for (let i = 1; i <= factorNum; i++) {
  if (factorNum % i === 0) console.log(i);
}


// 9. HCF and LCM
let x = 12, y = 18;
let hcf = 1;

for (let i = 1; i <= x && i <= y; i++) {
  if (x % i === 0 && y % i === 0) hcf = i;
}
let lcm = (x * y) / hcf;
console.log("9. HCF:", hcf);
console.log("   LCM:", lcm);


// 10. Pascal's Triangle
console.log("10. Pascal's Triangle:");
let rows = 5;
for (let i = 0; i < rows; i++) {
  let row = "";
  let num = 1;
  for (let j = 0; j <= i; j++) {
    row += num + " ";
    num = num * (i - j) / (j + 1);
  }
  console.log(row);
}

*/