const str = 'XeroX';

function getTheGapX(str) {

    let startIndex = str.indexOf('X');
    let endIndex = str.lastIndexOf('X');

    if (startIndex > -1 && endIndex > -1) {
        return endIndex - startIndex;
    }
    return - 1;
}

console.log(`Gap between the X's: ${getTheGapX(str)}`)
