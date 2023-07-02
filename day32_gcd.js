function gcd(a, b) {
    let divisor = 1;

    for (let i = 2; i <= a && i <= b; i++) {
        if (a % i === 0 && b % i === 0) {
            divisor = i;
        }
    }

    return divisor;
}

const a = 12
const b = 4

console.log("The GCD of " + a + "," + b + " is " + gcd(a, b));