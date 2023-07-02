function findEvenIndex(arr) {

    for (let i = 0; i < arr.length; i++) {
        let leftSum = arr.slice(0, i).reduce((element, sum) => element + sum, 0);
        let rightSum = arr.slice(i + 1).reduce((element, sum) => element + sum, 0);

        if (leftSum === rightSum) return i;
    }
    return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));