let name = 'gupta';
console.log('~name:', name);

let obj = {
    name:'kashish',
};

// # read 
console.log('~obj:',obj.name);

// ? create

obj.age = 19;
console.log('~obj:',obj);

// update 

obj.age = 20;

delete obj.age;

console.log('~obj:',obj);


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

let object_1 = {
    name: "kashish",
    age: "infinity",
    married:"false",
    hobbie:"COC",

}


for (let key in object_1) {
    console.log(`this is key ${key} value: ${object_1{key}}`)
}

let array1 = ["kashish","mehfooz sir","abhishek","sneha","renee","suraj","shivam",]


for  (let val of array) {
    console.log(val)
}

