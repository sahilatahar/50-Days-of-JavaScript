function getMiddle(s) {
    let middleIndex;
    let length = s.length;

    if (length <= 1) {
        return s;
    }

    middleIndex = Math.floor(length / 2);
    if (length % 2 === 0) {
        return s[middleIndex - 1] + s[middleIndex];
    }
    return s[middleIndex];
}

console.log(getMiddle('testing'))