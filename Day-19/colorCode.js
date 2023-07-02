const colorCode = (color) => {

    color = color[0].toUpperCase() + color.slice(1).toLowerCase();

    const colorCodes = {
        Black: 0,
        Brown: 1,
        Red: 2,
        Orange: 3,
        Yellow: 4,
        Green: 5,
        Blue: 6,
        Violet: 7,
        Grey: 8,
        White: 9
    }

    return colorCodes[color];
}

console.log(colorCode('black'));