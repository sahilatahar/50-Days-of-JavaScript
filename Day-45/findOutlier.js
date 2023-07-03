function findOutlier(integers) {
    let exceptionNum =  integers.filter(num => num % 2 == 0);
    if (exceptionNum.length === 1) {
        return exceptionNum[0];
    } 
    return integers.filter(num => num % 2 !== 0)[0];
}
