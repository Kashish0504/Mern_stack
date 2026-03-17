let promise_1 = new promise((res , rej) => {
    settimeout(() => {
        res('hello');
    }, 2000);
} );

let promise_2 = new promise((res , _) => {
    settimeout(() => {
        res('hello2');
    }, 1000);
} );

let promise_3 = new promise((res , rej) => {
    settimeout(() => {
        res('err');
    }, 500);
} );

async function getdata() {
    try {
        let res = await promise.all([promise_1, promise_2, promise_3]);
        console.log('~ res:',res);
    } catch (error) {
        console.log('~ error:', error);
    }
}






