function sumTwoSmallestNumbers(numbers) {
    return numbers.sort((a,b) => a - b).splice(0,2).reduce((sum,item) => sum + item);
}

console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))