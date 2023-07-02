function nthlargest(arr, highest) {
    return arr.sort((a, b) => b - a)[highest - 1];
}

const arr = [43, 56, 23, 89, 88, 90, 99, 652];
const highest = 4;

console.log(nthlargest(arr, highest));