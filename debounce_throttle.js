const debounce_delay = function(fun, delay) {
    let timeout;
    return function () {
        let context = this;
        let args = [...arguments];
        if (timeout){
            clearTimeout(timeout);
        }
        timeout = setTimeout(()=>{
            fun.apply(context, args);
            timeout = null;
        }, delay);
    }
}
const debounce_now = function (fun, delay) {
    let timeout;
    return function() {
        let context = this;
        let args = [...arguments];
        if(!timeout){
            fun.apply(context, args);
        } else {
            clearTimeout(timeout);
        }
        timeout = setTimeout(()=>{
            timeout = null;
        }, delay);
    }
}
let throttle = function(fun, delay){
    let timer;
    return function() {
        let context = this;
        let args = [...arguments];
        if(!timer){
            timer = setTimeout(()=>{
                fun.apply(context, args);
                timer = null;
            }, delay);
        }
    }
}
let fun1 = debounce_delay(()=>{
    console.log('延迟');
},1000);
let fun2 = debounce_now(()=>{
    console.log('延迟');
},1000);
let fun3 = throttle(()=>{
    console.log('节流')
},1000)
let i = 0;

