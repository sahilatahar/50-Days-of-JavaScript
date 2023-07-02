function accum(s) {
    let strArr = s.split('');
    let newStr = '';

    strArr.forEach((char, index) => {
        if (newStr !== '') {
            newStr += '-';
        }
        newStr += char.toUpperCase();

        for (let i = 0; i < index; i++) {
            newStr += char.toLowerCase();
        }
    })
    return newStr;
}

console.log(accum("ZpglnRxqenU"))
