function toWeirdCase(string) {
    let newString = '';

    for (let i = 0; i < string.length; i++) {
        newString += i % 2 === 0 ? string[i].toUpperCase() : string[i].toLowerCase();
    }
    return newString;
}

console.log(
    `The weird case of ${"A test case"} is ${toWeirdCase("A test case")}`
);
