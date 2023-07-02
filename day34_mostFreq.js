function mostFreq(arr) {
    let freq = [];

    [...new Set(arr)].forEach(item => {
        let length = arr.filter(element => element === item).length;
        freq.push([item, length]);
    });

    freq = freq.sort((a, b) => {
        return b[1] - a[1];
    })

    return `${freq.slice(0, 1)[0][0]} ${freq.slice(0, 1)[0][1]}`;
}

const arr = [1, 2, 2, 4, 5, 6, 6];

console.log(mostFreq(arr));