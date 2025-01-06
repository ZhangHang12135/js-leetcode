function convertToTitle(columnNumber) {
    const charNum = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let charStr = '';
    while(columnNumber > 26) {
        charStr += charNum[columnNumber % 26].concat(charStr);

        columnNumber= Math.floor(columnNumber / 26);
    }
    charStr = charNum[columnNumber].concat(charStr)
    return charStr;
};
convertToTitle(52);