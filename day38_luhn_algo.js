const valid = (string) => {

    if (string.length < 1) return false;

    string = string.split(' ').join('');

    let numbers = string.split('');

    numbers = numbers.reverse().map((number, index) => {
        if (index % 2 !== 0) {
            let newNum = Number(number) * 2;
            return newNum < 9 ? newNum : newNum - 9;
        } 
        return number;
    });

    let sum = numbers.reduce((sum, number) => sum + Number(number), 0);

    return sum % 10 === 0;
}

console.log(valid('4539 3195 0343 6467'))