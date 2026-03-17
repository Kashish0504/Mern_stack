// let icecream = new Promise((resolved , rejected)=>{
//     let value = false;
//                      // ture or false
//     if(value) {
//         resolved('got it....');

//     }else {
//         rejected('call mommy!!!!');

//     }
// });

// icecream
//   .then((res) => {
//     console.log('~res:',res);

   
// })
// .catch((err) => {
//     console.log('~err:',err);
// })

// .finally(() => console.log('finally excution done'));






//set timeout
/*
console.log('A');
const timeout = () =>{
    console.log('B');
    let id = setTimeout(() => {
        console.log('this is settimeout');

    },3000);
    console.log('C');
};
console.log('D');
timeout();
console.log('E');


//setinterval

console.log('A');

const timeOut_1 = () => {
    console.log('B');
    let id = setInterval(() => {
        console.log('this is setinterval');
        clearInterval(id);
    }, 3000);
    console.log('C');
};

console.log('D');
timeOut_1();
console.log('E');




function naam() {
    let name = 'hello';
    return () => {
        let name = 'gupta';
        return name;
    };
}

console.log('~ naam(:', naam()());  
*/



let icecream = new Promise((res , rej) => {
    let flag = false;
    if (flag) {
        res('get');
    }else {
        rej('not found');

    }
});


icecream
    .then((res) => console.log('res:-->',res))
    .catch((err) =>console.log('err: -->', err))
    .finally(() =>console.log('done'));

    /*
    promise
       all
       allsettled
       */






       
