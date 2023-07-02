function wave(str) {

    let wordsWave = [];

    for (let i = 0; i < str.length; i++) {
        let wordArr = str.split('');
        if (wordArr[i] !== ' ') {
            wordArr[i] = wordArr[i].toUpperCase();
            wordsWave.push(wordArr.join(''));
        }
    }
    return wordsWave;
}

console.log(wave("two words"));
