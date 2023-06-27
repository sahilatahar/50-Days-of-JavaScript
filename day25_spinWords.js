function spinWords(string) {
    //TODO Have fun :)
    let arr = string.split(' ');
    string = arr.map((word) => {
        if (word.length >= 5) {
            return word.split('').reverse().join('');
        }
        return word;
    }).join(' ');

    return string;
}

console.log(spinWords('Hey fellow warriors'))