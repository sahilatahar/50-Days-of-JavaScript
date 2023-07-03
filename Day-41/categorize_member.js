function openOrSenior(data) {
    let catagories = [];

    data.forEach(element => {
        if(element[0] >= 55 && element[1] > 7) {
            catagories.push('Senior');
        } else {
            catagories.push('Open');
        }
    });
    return catagories;
}

let output = openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
]);

console.log(output);
