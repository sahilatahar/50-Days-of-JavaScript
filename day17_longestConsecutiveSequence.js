const longestConsecutiveSequence = (inputArray) => {

    let longestSequence = 0;
    let currentSequence = 0;

    inputArray = [...new Set(inputArray)];

    inputArray.forEach((element, index, inputArray) => {
        if (inputArray.indexOf(element - 1) <= -1) {
            currentSequence = 1;
            while (inputArray.indexOf(element + currentSequence) > -1) {
                currentSequence++;
            }
            if (currentSequence > longestSequence) {
                longestSequence = currentSequence;
            }
        }
    });

    return longestSequence;
}
