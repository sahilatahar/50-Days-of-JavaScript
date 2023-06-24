const convertDigitsToAskedBase = (digits, baseA, baseB) => {
    let decimalValue = 0;

    // Convert digits from baseA to decimal
    for (let i = 0; i < digits.length; i++) {
        decimalValue = decimalValue * baseA + digits[i];
    }

    // Convert decimal value to baseB
    const convertedDigits = [];
    while (decimalValue > 0) {
        const remainder = decimalValue % baseB;
        convertedDigits.unshift(remainder);
        decimalValue = Math.floor(decimalValue / baseB);
    }

    return convertedDigits;
};

console.log(convertDigitsToAskedBase([5, 8], 10, 16));
