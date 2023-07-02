const isPangram = (input) => {

    if (input.length < 26) {
        return false;
    }

    input = input.toLowerCase();

    // Remove spaces
    input = input.split(' ').join('');

    // Removing duplicates characters
    let inputArr = [...new Set(input.split(''))];

    // Remove special characters symbols
    inputArr = inputArr.filter(item => item[0].charCodeAt(0) >= 97 && item[0].charCodeAt(0) <= 122);

    const { length } = inputArr;

    let alphabets = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < length; i++) {
        if (!inputArr.includes(alphabets[i])) {
            return false;
        }
    }
    return true;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'))
console.log(isPangram('Mr. Jock, TV quiz PhD., bags few lynx'))