/*const value = undefined;

switch (null) {
    case true :
        console.log(' yes');
        break;
        
        case false:
            console.log('no');
            break;

            default:
                console.log('please select boolen value true/false');

}




// function's
/*

define 
name-convention
call
*/


 /* function sumofvalue(a,b,c) {
    console.log(a + b + c);
    return a + b + c;

  }

  console.log(sumofvalue(10 , 7 , 3));      

  const arrowFunc =  (a , b, c)=> {
    return a + b + c;
  };

  //const ans = arrowFunc (1, 2 , 3);

  console.log('~ans:',arrowFunc(1 , 2 , 3));
*/

  
  //calculator


 let num_1 = +process.argv[2];
let num_2 = +process.argv[3];
let operator = process.argv[4];

console.log('~operator:', operator);

function calc(n1, n2, opts) {
  console.log('~opts:', opts);
  switch (opts) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    case '*':
      return n1 * n2;
    case '/':
      return n1 / n2;
    default:
      return null;
  }
}

let result = calc(num_1, num_2, operator);
console.log('Result:', result);


  // const result = calc(num_1,num_2,operators);

  //   if(result === null){
  //     console.log('please select correct operators !!');

  //   }else {
  //     console.log(Math.abs(result));
  //   }

  //   const addfunc = (A, B)=>{
  //     return A + B;

  //   };
  //   console.log(addfunc(num_1,num_2));