const valid = (string) => {

    if (string.length < 1) return false;

    string = string.split(' ').join('');

    let numbers = string.split('');

    numbers = numbers.map(number => Number(number));

    numbers = numbers.reverse().map((number, index) => {
        if (index % 2 !== 0) {
            let newNum = number * 2;
            return newNum < 9 ? newNum : newNum - 9;
        } 
        return number;
    });

    let sum = numbers.reduce((sum, number) => sum + number, 0);

    return sum % 10 === 0;
}

console.log(valid('4539 3195 0343 6467'))