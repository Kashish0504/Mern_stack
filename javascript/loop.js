/*let array = [
    1,
    2,
    true,
    false,
    { name: 'sneha'},
    ['abhishek','kashish'],
    'renee',
]

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]); 
for (let i = 0; i < array.length; i++) {
    console.log(`This value: ${array[i]} 
This is index: ${i}\n`);
} */


//1. print numbers from 1 to 10 
for (let i = 1; i <=10; i++) {
     console.log(i);
}

//2./3. print  all even / odd numbers  between 1 to 50  

 for (let i=1; i<=50;i++)
  {
    if(i%2===0){
   console.log(`this is even number :- ${1}`)
}  else {
     console.log(`this is odd number :-${i}`)
  }
 }


// 4. print the multiplication table of 5 
 for (let i=1;i<=20;i++){
     console.log(`5 x ${i} = ${5 * i}`)
 }

// 5. print numbers from 100 down to (reverse order )

for (let i = 100; i >=1; i--){
    console.log(i);
}
 // 6. print the sum of numbers from 1 to 100
let sum = 0
 for (let i = 1; i <=100; i++){
    sum += i;
 }
 console.log("sum =",sum);

 // 7. print square of first 10 natural numbers 

 for (let i = 1; i<=10;i++){
    console.log(`square of ${i}=${i*i}`);
 }

 // 8. print cube of first 10 natural numbers 

 for (let i = 1; i<=10;i++){
    console.log(`cube of ${i}=${i*i*i}`);
 }

 // 9. print the first 10 multiples of 3

 for (let i = 1;i<=10;i++){
    console.log(`3x ${i}=${3 * i}`)
 }
//  // 10. print factorial of given number
  let num = +Process.argv[2];;
  let fact=1
  for (i = 1; i<= num; i++) {
    fact=fact*i;


  }
  console.log(fact)
// 10 answer is wrong



 //while  loop

 // 1 to 100


 let start = 1;

 let end = 100;

 while (start <=end) {
   //code


   console.log,{start};

   //increments
   start++;
 }

 let given = 5;

 let start_1 = 1;

 let result = 1;


 //120

 while (start_1 <= given) {
   result *=start_1;
   start_1++;

 }
 console.log('~result:',result);

 // do while loop

 let start_2 = 1;
 do {
   console.log{'hello'};
   start_2++;

 }while (start_2 <= 3);


 // for in and for of 
 let objects ={
   animal:'cat',
   married:false,
   age:44,
   city:{"pune","mumbai","lucknow","banglore"}
   hobbie: {
      virtual:'pub-g',
      outDoor:'football',
      inDoor:'carrom',
   },
   myName:function(){
      console.log{this.animal};

   },
 };

 for (let key in object){
   console.log('this is key ${key}this is value',object[key]);
 }

//console.log(array[4].name);