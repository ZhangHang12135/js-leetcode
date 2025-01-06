function decodeString(s) {
    let str = '';
    let stack = [];
    for(let i = 0; i < s.length; i++) {
        let char = s[i];
        str = ''
        if (char !== ']') {
            stack.push(char);
        } else {
            let popChar = stack.pop();
            while(popChar !== '[') {
                str = popChar + str;
                popChar = stack.pop();
            }
            
            let num = stack.pop();
            while(/\d/.test(stack[stack.length - 1])){
                num = stack.pop() + num;
            }
            stack.push(mutailStr(+num, str));
        }
    }
    return stack.toString();
};

function mutailStr(n, s) {
    let result = s;
    while(n > 1) {
        result += s;
        n--;
    }
    return result
}

decodeString('32[a]')