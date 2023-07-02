function factorial(n) {
    if(n === 0 || n < 0) return 1;
    return n * factorial(n - 1);
}

let n = 4;
console.log("The factorial of " + n + " is " + factorial(n));