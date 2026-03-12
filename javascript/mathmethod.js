/*console.log(Math.pow(2,4));
console.log(2 ** 4);

let num1 ='10';
let num2 ='20';
let num3 ='5';


console.log(Math.max(num1,num2,num3));
console.log(Math.min(num1,num2,num3));
let ans = Math.random() * 10;

console.log('this is floor',Math.floor(ans), 'this is the unfilter data',ans);
console.log('this is ceil',Math.ceil(ans),'this is the unfilter data',ans);
console.log('this is round',Math.round(ans),'this is the unfilter data',ans);


console.log('this is floor',Math.floor(5,7));
console.log('this is trunc',Math.trunc(5.7));
console.log('this is ceil',Math.ceil(-4,2));
console.log('this is round',Math.round(4.7));

console.log(Math.fround(5.777));

*/

const arr2 = ['mehfooz',
    'kashish',
    'renee',
    'sneha',
    'suraj',
    'shivam',
    'abhishek',
     'kashish',
    'renee',
    'sneha',
    'suraj',
    'shivam',
    'abhishek',
     'kashish',
    'renee',
    'sneha',
    'suraj',
    'shivam',
    'abhishek',
];
let map = {};

for (let items of arr2) {
    if (map[ items]) {
        map[items] = [items] + 1;
        
    }
}
