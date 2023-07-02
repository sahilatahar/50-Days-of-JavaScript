function findOdd(arr) {
    for (let i = 0; i < arr.length; i++) {
        let filterArr = arr.filter(item => item === arr[i]);
        if (filterArr.length % 2 !== 0) {
            return arr[i];
        }
    }
    return 0;
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))
