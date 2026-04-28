/*
function concate (a,b) {
return a + b;
}
let ans1 = concate(5,9); // number, 14
console.log(`~ans1:`,ans1);
let ans2 = concate('kashish','gupta');//
console.log(`~ans1:`,ans1);*/


class car {
    run(){
        return'car is running';
    }
}
class truck extends car {
    run(){
        return'truck is running';
    }
}

class lamborgini extends car {
    run(){
        return'lamborgini is running';
    }
}

const  a1 = new car();
const a2 = new truck();
const a3 = new lamborgini();


let pdprint = {
    print: () => {
        console.log('printing pdf'):
    },
};

let docprint = {
    print: () =>{
        
    },
};

let txtprint = {
    print: () => {
        console.log('printing doc');
    },
};

function scan(data){
    data.print();
}

scan (pdfprint);
scan(docprint);
scan(txtprint);
