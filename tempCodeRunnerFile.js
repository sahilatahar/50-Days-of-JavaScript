const totalGrains = (n) => {
    let totalGrain = BigInt(1);
    for (let i = 2; i <= n; i++) {
        totalGrain += grainsOn(i);
    }
    return totalGrain;
}

const grainsOn = (input) => {
    let grains = BigInt(1);
    for (let i = 2; i <= input; i++) {
        grains *= 2;
    }
    return grains;
}

console.log(`Grains on 5th square: ${grainsOn(5)}`)
console.log(`Total grains upto 5th square: ${totalGrains(5)}`)
