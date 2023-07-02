function fibonacci(n) {

    let a = 0, b = 1, c = 0;
    for (let i = 1; i < n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}

console.log(`fibonacci value at position 5: ${fibonacci(5)}`)

// 0 1 1 2 3 5 8 13 