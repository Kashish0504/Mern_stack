class Account {
    #url; // private variable define
    #age;
    constructor(name,url,age) {
        ((this.name = name),(this.#url = url), (this.#age = age));
    }
}

const p1 = new Account('kashish','http://img.com/men',2000);
console.log(`~p1:`, p1)