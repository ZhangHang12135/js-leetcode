class MyPromise {
    constructor(callback) {
        this.status = 'pending';
        
    }
}

const p1 = new Promise((resolve, reject) => {
    resolve('aaaaa');
})